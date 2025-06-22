import { PaymentDetails } from "./PaymentDetails"
import  WeeklyPayments  from "./WeeklyPayments"

export const Card = () => {
  return (
    <div className="text-gray-900 dark:text-white relative"> 
        <div className="w-[1100px] h-[890px] mx-auto rounded-xl shadow-md p-6 border border-gray-300 dark:border">
          <p class="font-normal text-gray-700 dark:text-gray-400"><PaymentDetails /></p>
        </div>
        <div className="mt-12 w-[1100px] h-[300px] mx-auto rounded-xl shadow-md p-6 border border-gray-300 dark:border">
          <p class="font-normal text-gray-700 dark:text-gray-400"><WeeklyPayments /></p>
        </div>
    </div>
  )
}
