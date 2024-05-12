export const Total = ({totalyDelivery}) => {

  return (
    <div className='flex flex-row justify-between w-full'>
        <p className='font-semibold text-sm'>TOTAL</p>
        <p className='font-semibold text-sm'>{totalyDelivery} €</p>
  
    </div>
  )
}

