import {  IconCloudFilled, IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import Button from "../Button";

export default function MealDeliveryCard({ deliveryTime, isAdded, meals }) {
  return (
    <>
      <div className="pb-5 border-b border-gray-300 mb-5">
        <div className="text-gray-500 font-semibold flex justify-between items-center mb-3">
          <div className="flex gap-3 justify-center">
            {deliveryTime == 'pagi' ?
              <IconCloudFilled className="text-gray-500" />
              : deliveryTime == 'siang' ?
                <IconSunFilled className="text-gray-500" />
                : deliveryTime == 'malam' ?
                  <IconMoonFilled className="text-gray-500" />
                  : ''
            }
            {deliveryTime}
          </div>
          <div>
            {
              isAdded ?
                <Button>-</Button>
                :
                <Button>+</Button>
            }
          </div>
        </div>
        {
          isAdded &&
          <div>
            <div className="flex mb-3 bg-primary-50 p-3 rounded-xl max-w-[400px] flex-1">
              <div className="flex items-center h-5">
                <input id="helper-checkbox" type="checkbox" value="" className="w-4 h-4 accent-primary-700 rounded-sm focus:ring-primary-500 focus:ring-2" />
              </div>
              <div className="ms-2 text-sm">
                <div>
                  <label for="helper-checkbox" className="font-medium">Gado-Gado </label>
                  <small className="text-primary-700 underline cursor-pointer">lihat detail</small>
                </div>
                <div className="flex gap-3 items-center flex-wrap mt-3">
                  <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
                    <div className="font-semibold text-primary-800 text-xs">
                      calorie: 100 kkal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )

}