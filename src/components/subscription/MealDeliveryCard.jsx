import { IconCloudFilled, IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import Button from "../Button";


export default function MealDeliveryCard({ selectedFood, deliveryTime, foodMenu, onClickProp }) {
  return (
    <>
      <div className="pb-5 border-b border-gray-300 mb-5">
        <div className="text-gray-500 font-semibold flex justify-between items-center mb-3">
          <div className="flex gap-3 justify-center">
            {deliveryTime == 1 ?
              <IconCloudFilled className="text-gray-500" />
              : deliveryTime == 2 ?
                <IconSunFilled className="text-gray-500" />
                : deliveryTime == 3 ?
                  <IconMoonFilled className="text-gray-500" />
                  : ''
            }
            {deliveryTime == 1 ? 'pagi' : deliveryTime == 2 ? 'siang' : deliveryTime == 3 ? 'malam' : null}
          </div>
        </div>
        <div className="flex gap-5 flex-wrap">
          {
            foodMenu?.map((element) => {
              return (
                <div className={`${selectedFood?.id_meal_type == deliveryTime && selectedFood?.id_food_menu == element.id_food_menu ? 'bg-primary-50 border border-primary-800 shadow-xl' : 'bg-gray-50 border border-gray-200'} flex mb-3 p-3 rounded-xl min-w-[280px] max-w-[400px] flex-1`} onClick={() => {
                  if (selectedFood && selectedFood.id_food_menu == element.id_food_menu) {
                    return onClickProp({})
                  }
                  onClickProp({
                    id_meal_type: deliveryTime,
                    id_food_menu: element.id_food_menu,
                  })
                }}>
                  <div className="size-5 rounded-full p-[2px] bg-white border border-gray-300 flex justify-center items-center">
                    <div className={`${selectedFood?.id_meal_type == deliveryTime && selectedFood?.id_food_menu == element.id_food_menu ? 'bg-primary-700 size-2 rounded-full' : ''} `}>

                    </div>
                  </div>
                  <div className="ms-2 text-sm">
                    <div>
                      <label for="helper-checkbox" className="font-medium">{element.title} </label>
                    </div>
                    <div className="flex gap-3 items-center flex-wrap mt-3">
                      {element.nutrition.map((el, index) => {
                        if (index <= 1) {
                          return (
                            <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
                              <div className="font-semibold text-primary-800 text-xs">
                                {el.name} : {el.value} {el.unit}
                              </div>
                            </div>
                          )
                        }
                      })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}