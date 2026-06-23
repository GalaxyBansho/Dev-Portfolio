
import css from './assets/Media/css.png'
import html from './assets/Media/html.png'
import javascript from './assets/Media/javascript.png'
import react from './assets/Media/react.png'
import tailwind from './assets/Media/tailwind.svg' 
import mockup from './assets/Media/mockup.png' 
import present from './assets/Media/present.svg'
import calendar from './assets/Media/calendar.svg'
import notepad from './assets/Media/notepad.svg'
import Form from './assets/components/Form' 

function App() {
  

  return (
    // 1. Changed h-screen to min-h-screen so the page can scroll naturally if content overflows
    <div className="h-full w-full bg-[#729B79] p-2 md:p-12 lg:p-8 flex items-start justify-center"> 
      
 
      <div className="w-full max-w-8xl mx-auto h-full">
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 auto-rows-[230px] ">   
          
         {/* Grid Layout */} 
         {/* Top Row */}
        <div className="lg:col-span-3 lg:row-span-1 rounded-xl bg-white shadow-lg shadow-green-950/20 border-[#BACDB0] border-3"> 
        <h1 className="text-4xl pt-5 pl-5">Judah Davis</h1> 
        <span className="text-2xl pt-5 pl-10">UX Strategist and Web Developer</span>  
        <div className='flex justify-center items-center gap-5  mt-10'> 
          <img src={html} alt="" className="w-[50px] h-[50px]"/> 
          <img src={css}alt="" className=' w-[50px] h-[50px] '/> 
          <img src={javascript} alt="" className='w-[50px] h-[50px] '/> 
          <img src={react} alt=""className='w-[50px] h-[50px] ' /> 
          <img src={tailwind} alt=""className='w-[50px] h-[50px] '/> 
            </div>
        </div> 
       
       {/* Offer Statement */}
        <div className="lg:col-span-4 lg:row-span-1 rounded-xl bg-[#BACDB0] shadow-lg shadow-green-950/20 flex items-center justify-center
        ">  
        <div className='h-50 w-160 '><span className='text-white text-2xl pt-5 pl-5'>-Local Web Design & Strategy </span> 
        <h1 className='pl-5 text-3xl text-white text-bold mt-5'>I build custom digital storefronts that turn web traffic into measurable revenue.  </h1>  
        <p className='text-white pl-5 mt-5 italic'>As a Web Strategist & Developer, I help local businesses  automate their operations and outshine their competition!</p>
        </div>
         </div> 

        <div className="lg:col-span-5 lg:row-span-1 rounded-xl bg-[#BACDB0] shadow-lg shadow-green-950/20 flex flex-col"> 
        <div className=' h-20 w-full flex'>   
          <div className='flex flex-col pl-5 '>  
             
{/* 
             Second Row */} 
             {/* Case Study */}
          <span className='text-white text-xl'>Recent Projects</span>
          <h1 className='text-4xl text-white'>DeeDee's Delights</h1> 

          </div>
        <div className='flex flex-col pl-5 h-full w-150 ml-20 mt-2 text-white text-[14px] text-left '> 
           <p> Deedee’s Delights is an e-commerce bakery based out of North Carolina that specializes in nostalgic home baked goods and distributes directly to local customers daily!</p>  </div>
       
          </div> 
        <div className='h-full w-full flex gap-2'> 
          <div className=' h-40 w-60 flex justify-center items-center pt-2'> 
            <div  className='border-black border h-35 w-30 rounded-xl'> 
              <a href="https://deedeedelights.vercel.app/"> <img src={mockup} alt="" className='object-cover rounded-xl h-full w-full'/></a>
            </div>
          </div>
          <div className='  h-50 w-90 '> 
            <h1 className='text-white text-2xl pt-3'>Problem</h1> 
            <p className='text-white'>As a new business, they had already being doing work without an online storefront. Their sales process was not automated or optimized </p>
          </div>
          <div className=' h-50 w-100 '> 
              <h1 className='text-white text-2xl pt-3 pl-2'>Solution</h1> 
          <p className='text-white pl-2'>Connected a payment processor by integrating Paypal API, and creating  a contact form for queries, submissions and custom orders.</p>
          <span className='text-xs flex text-white mt-3 ml-5' >Link to the full case study here:  <a href="https://deedeedelights.vercel.app/" className='underline'> Deedee Delights Case Study </a> </span>
          </div> 
          
        </div>
        </div>
 
          {/* Contact Form */}
        <div className="lg:col-span-2 lg:row-span-2 rounded-xl bg-white shadow-lg shadow-green-950/20 border-[#BACDB0] border-3 flex items-center justify-center">  
            <Form/>

        </div> 


 {/* This is where you working last */}
  {/* Last Row */}
        <div className="lg:col-span-3 lg:row-span-1 rounded-xl bg-white shadow-lg shadow-green-950/20"> 
 

        <div className='flex justify-between px-3 h-20'> <h1 className='text-2xl h-15'>How it Works</h1> <h1 className='text-2xl h-15 text-[#729B79]'>It's Too Easy!</h1></div> 

        <div className='flex gap-5 justify-center items-end h-35'>  
          <div className='flex flex-col items-center'> 
               <span className=' w-full text-[14px] mb-1 text-[#729B79]'>Submit To The Contact Form</span>
          <div className='border-3 border-[#729B79] h-40 w-45 rounded-2xl px-2 py-1  flex flex-col items-center'> 
            <p className='text-[12px] text-center '>Fill out the form with a general idea of your business and what services you would like to request</p> 
            <img className='h-20 w-full pt-3 pb-2 ' src={notepad} alt="" /></div> 
       
          </div>  

          <div className='flex gap-1 justify-center items-end  h-35'> 
            <div className='flex flex-col items-center'> 
          <span className=' text-center w-full text-[14px] mb-1 text-[#729B79]'>Schedule a meeting </span>
          <div className='border-3 border-[#729B79] h-40 w-45 rounded-2xl px-2 py-1 flex flex-col items-center'> 
             <p className='text-[12px] text-center' > We’ll discuss your project in further detail and come up with an action plan to get you the best design</p> 
             <img className='h-20 w-full pt-3 pb-2 ' src={present} alt="" />
          </div>  
          </div>
          </div>  

          <div className='flex gap-1 justify-center items-end h-35'> 
            <div className='flex flex-col items-center'> 
          <span className='text-center w-full text-[14px] mb-1 text-[#729B79]'>Await Delivery</span>
          <div className='border-3 border-[#729B79] h-40 w-45 rounded-2xl px-2 py-1  flex flex-col items-center'> 
             <p className='text-[12px] text-center'>Based on what we discussed in the meeting, We'll discuss a timeline and get started on bringing your idea to life. </p> 
             <img className='h-20 w-full pt-3 pb-2 ' src={calendar} alt="" />
          </div>  
          </div>
          </div>
        </div>

        </div> 

        <div className="lg:col-span-2 lg:row-span-1 rounded-xl bg-[#BACDB0] shadow-lg shadow-green-950/20"> 
        <h1 className ='pl-5 text-3xl text-white font-bold mt-5' >Testimonials</h1> 
        <p className='text-white pl-5 mt-5 italic text-xl'> “We were very impressed with the quality of work, it definitely exceeded our expectations.”</p> 
        </div> 

        

       
            
      
    
          
        </div>  
        

      </div>
    </div>
  );
}

export default App
