
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

const features = [
  { icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100' },
  { icon: Lock, text: 'Secure Payment', subtext: '100% protected payments' },
  { icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy' },
  { icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service' },
]

const Features = () => {
  return (
    <div className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className='flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left p-4 rounded-lg bg-white shadow hover:shadow-lg transition-all duration-300'
              >
                <Icon className='shrink-0 h-12 w-12 text-red-500' aria-hidden='true' />
                <div className='mt-2 sm:mt-0 sm:ml-4'>
                  <p className='text-lg font-semibold text-gray-900'>{feature.text}</p>
                  <p className='mt-1 text-sm text-gray-500'>{feature.subtext}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features