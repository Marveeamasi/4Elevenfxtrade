import InvestPlans from '@/components/InvestPlans'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

export default function page() {

  return (
    <div className='flex w-full'>
      <Sidebar title='invest'/>
      <div className='w-full'>
      <Topbar title='invest'/>
      <InvestPlans />
      </div>
    </div>
  )
}
