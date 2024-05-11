export const TotalDelivery = ({envio}) => { 
    return (
      <div className='flex flex-row justify-between w-full'>
          <p className=' font-normal text-sm'>ENVIO</p>
          <p className='font-semibold text-sm'>{envio === 0?'GRATIS':`${envio},00 €`}</p>
      </div>
  )
}

