

export default function SidebarNav({ activeSection, setActiveSection }) {

  return (
    <>
      <section>
        <div className="min-w-[329px] flex-1 rounded-lg">
          <ul class="bg-white border rounded-lg border-gray-300">
            <li class={`${activeSection == 'profile' ? 'bg-primary-100 font-bold text-primary-900' : ''} w-full px-4 py-4 border-b border-gray-200 transition-all rounded-t-lg`}
              onClick={() => {
                setActiveSection('profile')
              }}>
              Profile
            </li>
            <li class={`${activeSection == 'subscription' ? 'bg-primary-100 font-bold text-primary-900' : ''} w-full px-4 py-4 border-b border-gray-200 transition-all`}
              onClick={() => {
                setActiveSection('subscription')
              }}>
              Subscription Plan
            </li>
            <li class={`${activeSection == 'meal_order' ? 'bg-primary-100 font-bold text-primary-900' : ''} w-full px-4 py-4 border-b border-gray-200 transition-all`}
              onClick={() => {
                setActiveSection('meal_order')
              }}>
              Mearl Order History
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}