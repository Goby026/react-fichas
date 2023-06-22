import Avatar_Anisha from '../../assets/img/avatar-anisha.png';
import Avatar_Ali from '../../assets/img/avatar-ali.png';
import Avatar_Richard from '../../assets/img/avatar-richard.png';

export const Testimonial = () => {
  return (
    <section className="container max-w-6xl px-5 mx-auto mt-32 text-center">

        <h2 className="text-4xl font-bold text-center">
            Whats different about Manage.
        </h2>

        {/* testimonios */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">

          {/* testimonio 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={Avatar_Anisha} alt="" className="w-16 -mt-14"/>
            <h5 className='text-lg font-bold'>Anisha Li</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          {/* testimonio 2 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:mt-0 sm:mt-5">
            <img src={Avatar_Ali} alt="" className="w-16 -mt-14"/>
            <h5 className='text-lg font-bold'>Ali Bravo</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          {/* testimonio 3 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:mt-0 sm:mt-5">
            <img src={Avatar_Richard} alt="" className="w-16 -mt-14"/>
            <h5 className='text-lg font-bold'>Richard Watts</h5>
            <p className='text-sm text-darkGrayishBlue'>
            Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>

        </div>

        {/* button */}
        <div className='my-16'>
          <a href="" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
            Empecemos
          </a>
        </div>

    </section>
  )
}
