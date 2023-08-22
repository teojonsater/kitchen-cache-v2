import bs4
import requests
import uuid
from datetime import datetime
import json


def main():
    recipe = input("Enter a recipe\n>")
    res = requests.get(recipe)
    res.raise_for_status()
    soup = bs4.BeautifulSoup(res.text, "html.parser")

    ingredient_groups_elements = soup.findAll(
        "div", {"class": "ingredients-list-group row-noGutter-column"})[:-1]
    ingredient_groups = []
    for group in ingredient_groups_elements:
        group_name_element = group.find(
            "h3", {"class": "ingredients-list-group__heading"})
        group_object = {
            "ingredients": []
        }
        if group_name_element is not None:
            group_object["name"] = group_name_element.text

        group_cards = group.findAll(
            "div", {"class": "ingredients-list-group__card"})
        for card in group_cards:
            ingredient = {}

            amount = card.find(
                "span", {"class": "ingredients-list-group__card__qty"})
            if amount is not None:
                amount_str = amount.text.split(" ")[0]
                if amount_str == "ca":
                    amount_str = amount.text.split(" ")[1]
                if "/" in amount_str:
                    amount_str = int(amount_str.split(
                        "/")[0]) / int(amount_str.split("/")[1])
                    ingredient["amount"] = amount_str
                else:
                    ingredient["amount"] = int(amount_str)

                try:
                    measurement = card.find("span", {"class": "ingredients-list-group__card__qty"}).text.split(" ")[
                        1].replace(u"\xa0", u"")
                    ingredient["measurement"] = measurement if measurement != "" else "-"
                except IndexError:
                    ingredient["measurement"] = "-"
            else:
                ingredient["amount"] = 0
                ingredient["measurement"] = "-"

            ingredient["name"] = card.find(
                "span", {"class": "ingredients-list-group__card__ingr"}).text

            group_object["ingredients"].append(ingredient)

        ingredient_groups.append(group_object)

    recipe_dict = {
        "id": str(uuid.uuid4()),
        "createdAt": str(datetime.now().isoformat()),
        "name": soup.find("h1", {"class": "recipe-header__title"}).text,
        "desc": soup.find("div", {"class": "recipe-header__preamble"}).text,
        "servings": int(soup.find("div", {"class": "ingredients-change-portions"})["default-portions"]),
        "cookingTime": int(
            soup.find("div", {"class": "recipe-header__summary"}).findChildren("a")[0].text.split(" ")[2]),
        "originalRecipe": recipe, "ingredients": [],
        "image": soup.find("img", {"class": "recipe-header__image"})["src"],
        "steps": [step.text for step in soup.findAll("div", {"class": "cooking-steps-main__text"})],
        "ingredientGroups": ingredient_groups
    }

    # Create json file with recipe
    with open(f"recipes/{recipe_dict['name']}.json", "w", encoding="utf-8-sig") as f:
        json.dump(recipe_dict, f, indent=4, ensure_ascii=False)


if __name__ == "__main__":
    main()
