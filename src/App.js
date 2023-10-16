import React, { useState } from 'react'
import './App.css'
import {LuLayoutDashboard} from 'react-icons/lu'
import {RiArrowDropRightLine,RiArrowDropDownLine} from 'react-icons/ri'
import {LiaProductHunt} from 'react-icons/lia';
import {TfiUser} from 'react-icons/tfi';
import {PiMoneyLight} from 'react-icons/pi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CiDiscount1} from 'react-icons/ci';
import {BiSupport} from 'react-icons/bi';
import {BsSearch,BsReceiptCutoff} from 'react-icons/bs';
import {MdOutlineAccountBalanceWallet} from 'react-icons/md';
import {FaShoppingBag} from 'react-icons/fa';
import {AiOutlineDollarCircle,AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai';

const App = () => {
  const [mob,setMob]=useState(false);

  const handle=()=>{
    setMob(!mob);
    console.log("clicked toggle mod")
  }
  return (
    <div className='main'>
      <div className='left_side'>
        <div className='dashboard_icon'>
          <div className='navbar'>
           <div>

           <LuLayoutDashboard className='icon'/>Dashboard
           </div>
           <GiHamburgerMenu onClick={handle} className='hamburger'/>
          </div>
        </div>
        {mob ?(
           <div className='left_side_nav'>
           <div>
             <div className='dashboard'><LuLayoutDashboard className='icon'/>Dashboard</div>
             <div className='sidebar'>
               <div>
               <LiaProductHunt className='icon'/>Product
               </div>
               <div>
                 <RiArrowDropRightLine/>
               </div>
             </div>
             <div className='sidebar'>
               <div>
               <TfiUser className='icon'/>Customers
               </div>
               <div>
                 <RiArrowDropRightLine/>
               </div>
             </div>
             <div className='sidebar'>
               <div>
               <PiMoneyLight className='icon'/>Income
               </div>
               <div>
                 <RiArrowDropRightLine/>
               </div>
             </div>
             <div className='sidebar'>
               <div>
               <CiDiscount1 className='icon'/>Promote
               </div>
               <div>
                 <RiArrowDropRightLine/>
               </div>
             </div>
             <div className='sidebar'>
               <div>
               <BiSupport className='icon'/>Help
               </div>
               <div>
                 <RiArrowDropRightLine/>
               </div>
             </div>
           
           </div>
           <div>
             <div className='footer'>
               <div >
                 <img className='avatar' src="data:image/jpeg;base64,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
                 kkwxzOJCZDOTCtkkkkmASSSSYxJJJJjEkkkmMSSSSYxMnznZySYx/9k=" alt="avatar"/>
                 <span style={{fontSize:"14px",marginLeft:"8px"}}>Evano</span><br/>
                {"  "} <span style={{fontSize:"11px",marginLeft:"32px"}}>Project Manager</span>
               </div>
               <div style={{display:"flex", alignItems:"center"}}>
                 <RiArrowDropDownLine/>
               </div>
             </div>
 
           </div>
         </div>
        ):(<h1></h1> )}
        <div className='left_side_nav_large'>
          <div>
            <div className='dashboard'><LuLayoutDashboard className='icon'/>Dashboard</div>
            <div className='sidebar'>
              <div>
              <LiaProductHunt className='icon'/>Product
              </div>
              <div>
                <RiArrowDropRightLine/>
              </div>
            </div>
            <div className='sidebar'>
              <div>
              <TfiUser className='icon'/>Customers
              </div>
              <div>
                <RiArrowDropRightLine/>
              </div>
            </div>
            <div className='sidebar'>
              <div>
              <PiMoneyLight className='icon'/>Income
              </div>
              <div>
                <RiArrowDropRightLine/>
              </div>
            </div>
            <div className='sidebar'>
              <div>
              <CiDiscount1 className='icon'/>Promote
              </div>
              <div>
                <RiArrowDropRightLine/>
              </div>
            </div>
            <div className='sidebar'>
              <div>
              <BiSupport className='icon'/>Help
              </div>
              <div>
                <RiArrowDropRightLine/>
              </div>
            </div>
          
          </div>
          <div>
            <div className='footer'>
              <div >
                <img className='avatar' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAwgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADoQAAICAQIEAwQIBAYDAAAAAAECAAMRBCEFEjFBE1FhBhQicTJCUoGSocHhcpGT0RUWI2KC8SRDc//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACYRAAICAgEFAAMAAwEAAAAAAAABAgMREiEEEzFBURQiUjJCYSP/2gAMAwEAAhEDEQA/APkBS2v4WG0vSORskZBG4MZNtOoG61of9uQPzirEoxIBK+RlkXlFReU8ha6ay2Hbl8oYlAMEsOw5osjjl3C/ImGVmdNwPnM0NGSSLe6paDycvzEVah6icMCPQ5jdK2jes8rDtLPYznFyr8+WBJhlGLWfDFKhghxgkGFUV8x59lJ6gThUGw8g2l6qmdwuI4kU/CLXBSjKuyj6OT1iDKeY7bGatwfT5UgMOhECVV1OSAcdIEhrIZf/AE7XpzbpvEH0kIBHp2MAXaxuQjYbQoexMBcjbB9RD16Vq6vHIyAc4mNrt4K6Rcgq2wO0o1YqcHGV3BxHdClVmprU/Q35pzV1Ac3JjA8u/wAvSD2W7ea8mXtz7dDCOMoGnbKSOVgMefpLLgIQe/SMc6XpiTDc5hKRnOeghtRXymDr2QmMiTjhlGGDtKONxCqOYn0lWhFBBeZ/SFYYUKsvSEBzZ0ktZWbCDC56TAxwX0VShi5IyJTWWm5i3mxMmWQqozuM/LM61ROFH/UVoqm3HVC/hiSE92b7Y/nJFyDV/AZQrsTkSyhkOcfnOoRjHaG+Hw+XbOeuITJJ+CyVl0JA2nUynw/Vla7SBjJxGqQLFYnqIC8EpeAiIAFY9DKMiPYQTtOO/KBCVgFA/rAW4fBWvTFH5gciGT6RCpuRiFqvTmwV2O0stZWwsBkRcllWsfqSrTq4POcsOvrA6qhA4On6jcb9RGWrywKHDeWJ2hK1sKOMHO0OfY7rT/UXroUFTepHNvv3lbrGNoVR/pgkDI6zQ1SG2wXKuDy4x2GItqNOx5GrG+M9ZlIE6XFfqXt0y1aelqckuSWPljtOWV1nTc4zkDzh9EgUslxwDg5z0MNqKkoTDKD8Wx7bwN+iyrTjsZFCArYtgzldhBNR4ZH1vL0mtZpXAS6oKtmf0iVg/wDI+JcHv+sZPk5Z1YSTQlqwGrBURNsqoWarqq8y4zjoYDT6U6nVLWBvnJ+Qjp8HNZU5SSXliaLyIf8AdKFcTR4hUE1VgQYXO0XSoNW7EjK4hTyskZ1OL1E2l6/pCdI5jtLiroAd4xJLkiLzOG+Q/KWFZNTsOi+ffMNRXm4ZB5AOvnAai0czcvfaTkzoiko5YmTvJJJFwS2RcKewhPKUXmHeEDKfpLv6SmDIiDJ9I1TUVJ5m5T6wKqpI5Tt6xmtyU5X3I6Hv8pmisMIl1TrWHxzL9oQdTEZxmNnWNXWFwVGMNgnDY6SltNdgNtDcq53EXH0q0m8xC1uhAx1HURzR2Hm3XNbDGwmTztWclMjG2Y7o7wqAZKn1iyhwXpvSlyO2t4OuBwpRh2MOldGqQkE8/MdsYxELWFgBU/CO4E6dbZVVyjGAMZxuIurxwdKvgpPbwO+KNM4VkJUt5ZzK65RW1TDmKMZTh2opuBW8DfcHGTmP6vSmzTf6O+Dkcudv7RH+suToj/6VvRg7dH4+ORlGF2IP6Qd9T+6tVZksBkGH0/h1ILrkHMNiQ/QfKGvu5q1a1cVMMcwO8GZJj6wlFt+TO0FltiIiqLFQYYv2ier+C7n8vPvNfh9GPFeqhXr+0DvB8Q4fZZh6xkHpnriM5JSIdqU6TFRXt5goJ36ARvgSFeLEMv1CPvxOhBp3YMTkds4ltKAuqrtDEfF8XpDKWYslVXrbF+0xTXVl9XbgZ37RTWOoPhV55R1+c3bdNzW2sndiF9ZiamlfEzKVvhI5urraba9sWqqycmdao9jvChgq9INmJG0Zz5OZVLHJPF8Ko15ywOxiT5J3jBXuYNlm4JTywHLJCchnIMoTVhOX0nQs0xpcjpINIfsw7ov2WZwSEUMP3j3uh+zLDSn7MOyD2pCZDMMHOJEVlzjO/WaC6U+UuNIfKbZDdqXkzgvYiQoSek0xpD9mW90PZYd0btSM+trE2BwIXHPSQwGfOC1ur02m5hzB3H1F/WZp4rd1REXfbvFc0hdlF4ZqKpqbbJGMHabvC9VXp18Utyp9dS30jPCXaq+8lnsYk9hsB90FyMeuZKdikhqb5VvMT2XEbVttYJ8O+6jpF6dRaiPUG+B9jsDieWKEtk5z5zqvahyrupB65mjasYwCV03LY9fw3U6ii8lDyg9TkYmhqeLlQiL8bJ9aeLp4nehy3K/zHWaWg4nprfg1beC/byP39oW4SeWVp6qUY6xeD1lN1PGaj4tKi5dgQcH7xF04a628oxhfSLVUNWVtpYgHcMD1mxpdc7jlsB5wRykSE8x/x8Hr0WQswrfP36ZOoGdUUrfIQ43GMY6mZF7B2Yr032npNRwx6677VYZsPTy8xPOatGrOHKn5bQQsyL1NDisiS1vY4VfOFsp8MlSd+4htMVQDlBLHbML4SISzAu3ftG25ORUrQQNe2SdoJgOwjV3MxwoA9JT3fAzY2/lKbZOaVfwV5TOw3hr5yQE9T0qaaEGnHpGgoxOhPISOzPWVSFvdh5Sy6UeUbCiXAEzmx1VEUGk36Q1ekHlGkURmtBJu1jquImuhB7QXEKqtForL7mVFUbFmwM9hmbSrgdBEeKaGnielfSakE1tjcdQfMQKx5BOtavVcnyZa2uZ7nZQSc4Pc+QhqaNM5wbHBI2yNyfLE9Vxv2Xuq1KXcK0ytSibjmHNn5HbvEf8AL/FrLyb6mYkhTZkMAuMdP1zmX3TPAfT2RlhoyTwyxdwCdskA9o3Rwx3G+yjqe4hUW/T2vprQ4IOAHQ5A9Mz2/srwyviTppgzc1mSyscAjqJz226nodN00ZRzLweJ1PCHqsI5CpXGVfG0zv8AD7Gb0JIz92f1n1r2n9mxwMLXaxtNgyTWfpeX5z53qWvD2U08/OxGOVOZ9vKCq3LwzXdPBw3h4MW/S1UHw3djbnBx0x6QDUhkZkbdTsrfSM3h7NcYurZl0LfEvMpZuUk+f7HEY/ydx/VuDYiqRgmx3z1/tOjuRXs8/wDHsfiI97JX+/cMWk2K1lWzDJyBnYnM3k0eW5a0+Pz7wXs37N/4NS5crZqbPpvjp6CbtYsqsV1G49JKVvPDPZqqkq0prkRPDSqn3i8DzGe8xdZoNEtptBDkdidhPS6sVXsGvJzjsSZn2pp02rQY8iDOSd0m/J61FVSh4yeYtpyeZV3P3Yl69Fe45UrB/wB03CgLfDyj/iZZUI63ADyxKK/AsqE3wjGXgepcZY4H8oLUcGFYzY/5zesJK494wPSZ2qqpOc3uT6YjRv5IWdJHBi+40/a/OSNHS0Z+lZ/P9pJbvHF+KzFHtFxHzp/B+8svtHxH7VP4P3mPLDE7NEeIrrPpsf5i4j9ur+nLD2g4ifr1/gEyBLjE2i+DK6z+jZT2h4mOltf9MQ1ftHxUdLq/6SzEUwqNjvDpD4UV9n9M3V9o+MHbx0x/8l/tD08a4oxz4qfgEwq29THKbMEdf5RXVD4dFd8s8s3q+K8VYYNq4/gX+0PVr9eDk2qD5hBMiq8Dq2PQnH6xqu7Mk4JejvrtTNRbrLkam5a2Rm5mHIBk5znYTc0mr9203OgQeGrMnKoBBxPIe/V0tzO4UDuWl7vaPQpp3T3lSxUjAOe05bYKXGDpU69XnB6rh/HtRxjhlOu1HK99itliudskY/KKHVXaYt4Fda564QDP3zynsxx3SaTg9Wm1N6o6c2zHzYn9ZsJxbRaoHwNTWx/iiQqUWw1WVOtYwNW8b4iowoqPzWLt7R8XQHC04PX4P3ieou64PSJPqB2/L/udUaYP0QttjEcu9peKjtUD/B+8Ts9quLDvT/T/AHiOouz6RKx/WWVFfw4LOqn6kO3e0PE2OS9ef4P3i7ce4gQQXTH8MSdh5iBYiHsVfyRfW9R6mx88c14+sh/4/vKNx3Xnq9f4ZnkiVOIOxX8J/m9R/bHm45rj1sT8EC3F9a3WxfwxQ4lIe1D4Tl1d7/3Y1/iWr+2P5SRTEkPbj8E/Ju/pkzOgyuQJw2Ko3MfKIBRLiKHUN0UYEG1jN1JiboOR/wARU+kwE6NTUP8A2frM2SDdh2ZpjXVL3J/4wtfFKV6838pjyTbsKm0bx4zUAAvi/dAW8c1JyKeVB6dZlDpJFbbKK2f0NbqbbW5rbGZvUyvP6wckXAuzYTnlefBypwfMSsk2DbMcp4rrKtvHZh5NvG140x+nUSRt9KZGZDGTx4D3ZL2arcWrP1GHyAgm4hWezj7hM2SNuxHYx86ys/ak94rP1ohJNuwbMf5lPRh90hiA23BIMutrjqcwqYMjOZw7Qa3A9Rgy3MD3jZTAW5pyc++SHJhcsTOd/OSSQMSSSSYxJJJJjEkkkmMSdBnJBMFFhJIO
                kkwxzOJCZDOTCtkkkkmASSSSYxJJJJjEkkkmMSSSSYxMnznZySYx/9k=" alt="avatar"/>
                <span style={{fontSize:"14px",marginLeft:"8px"}}>Evano</span><br/>
               {"  "} <span style={{fontSize:"11px",marginLeft:"32px"}}>Project Manager</span>
              </div>
              <div style={{display:"flex", alignItems:"center"}}>
                <RiArrowDropDownLine/>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='right_side'>
        <div className='right_side_header'> 
          <div style={{fontSize:"23px"}}>Hello Shahrukh 👋,</div>
          <div>
            <BsSearch className='search'/>
            <input  placeholder='search'/>
          </div>
        </div>
        <div className='right_side_first'>
          <div className='box'>
            <div className='boxes'>

              <div className='box_img'>
                <AiOutlineDollarCircle className='dollar'/>
              </div>
              <div>
                <p style={{fontSize:"13px",color:'grey'}}>Earning</p>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>$198K</p>
                <p style={{fontSize:"10px"}}>
                  <span style={{color:'green',fontWeight:'bolder'}}><AiOutlineArrowUp/>37.8% </span>this month</p>
              </div>
            </div>
            
          </div>
          <div className='box'>
            <div className='boxes'>

              <div className='box_img' style={{backgroundColor:"rgb(231,219,255)"}}>
                <BsReceiptCutoff className='dollar' style={{color:"rgb(159,0,255)"}}/>
              </div>
              <div>
                <p style={{fontSize:"13px",color:'grey'}}>Orders</p>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>$2.4K</p>
                <p style={{fontSize:"10px"}}>
                  <span style={{color:'red',fontWeight:'bolder'}}><AiOutlineArrowDown/>2% </span>this month</p>
              </div>
            </div>
            
          </div>
          <div className='box'>
            <div className='boxes'>

              <div className='box_img' style={{backgroundColor:"rgb(204,242,255)"}}>
                <MdOutlineAccountBalanceWallet className='dollar' style={{color:"rgb(11,92,192)"}}/>
              </div>
              <div>
                <p style={{fontSize:"13px",color:'grey'}}>Balance</p>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>$2.4K</p>
                <p style={{fontSize:"10px"}}>
                  <span style={{color:'red',fontWeight:'bolder'}}><AiOutlineArrowDown/>2% </span>this month</p>
              </div>
            </div>
            
          </div>
          <div className='box'>
            <div className='boxes'>

              <div className='box_img' style={{backgroundColor:"rgb(255,185,222)"}}>
                <FaShoppingBag className='dollar'  style={{color:"rgb(218,0,26)"}}/>
              </div>
              <div>
                <p style={{fontSize:"13px",color:'grey'}}>Total Sales</p>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>$89K</p>
                <p style={{fontSize:"10px"}}>
                  <span style={{color:'green',fontWeight:'bolder'}}><AiOutlineArrowUp/>11% </span>this week</p>
              </div>
            </div>
            
          </div>
          
        </div>

        <div className='right_side_second'> 
           <div className='right_side_second_left'>
            <div className='overview'>
              <div>Overview</div>
              <div className='quarterly' style={{color:'darkgray'}}>Quarterly <RiArrowDropDownLine/> </div>
            </div>
            <p style={{    margin:"3px 21px",
              marginTop:'-22px',
              color: 'darkgray'}}>
                Monthly Earning
              </p>
            <div className='graph'>
              <div className='graphs'>
                <div className='graph_1' style={{height:'177px',marginTop:'53px'}}></div>
                <div>Jan</div>
              </div>
              <div className='graphs'>
                <div className='graph_1'  style={{height:'138px',marginTop:'92px'}}></div>
                <div>Feb</div>
              </div>
              <div className='graphs'>
                <div className='graph_1' style={{height:'230px'}}></div>
                <div>Mar</div>
              </div>
              <div className='graphs'>
                <div className='graph_1' style={{height:'171px',marginTop:'58px'}}></div>
                <div>Apr</div>
              </div>
              <div className='graphs'>
                <div className='graph_1' style={{height:'201px',marginTop:'28px'}}></div>
                <div>May</div>
              </div>
              <div className='graphs' style={{marginTop:'130px'}}>
                <div className='graph_1' style={{height:'100px'}}></div>
                <div>Jun</div>
              </div>
              <div className='graphs'>
                <div className='graph_1' style={{height:'201px',marginTop:'28px'}}></div>
                <div>Jul</div>
              </div>
              <div className='graphs'>
                <div className='graph_1' style={{height:'230px',backgroundColor:'rgb(90,50,234)'}}></div>
                <div>Aug</div>
              </div>
              <div className='graphs' style={{marginTop:'19px'}}>
                <div className='graph_1' style={{height:'211px'}}></div>
                <div>Sep</div>
              </div>
              <div className='graphs' style={{marginTop:'5px'}}>
                <div className='graph_1' style={{height:'197px',marginTop:'28px'}}></div>
                <div>Oct</div>
              </div>
              <div className='graphs' style={{marginTop:'5px'}}>
                <div className='graph_1' style={{height:'180px',marginTop:'45px'}}></div>
                <div>Nov</div>
              </div>
              <div className='graphs'>
                <div className='graph_1' style={{height:'201px',marginTop:'28px'}}></div>
                <div>Dec</div>
              </div>
            </div>
           </div>


           <div className='right_side_second_right'>
              <p style={{margin:'28px'}}>Customers</p>
              <p style={{margin:'-19px 30px',color:'darkgray'}}>Customers that buy products</p>
              <div className='chart'> 
                <img width={'339px'} height={'255px'} src='https://previews.123rf.com/images/rubelhossain/rubelhossain2010/rubelhossain201001007/157575239-32-percentage-32-percentage-circle-diagram-infographic.jpg'
                alt='image'/>
              </div>
            </div>
             
        </div>


        <div className='right_side_third'>
          <div className='search_Section'>
            <div style={{marginTop:'35px',
          marginLeft:'26px'}}>
            Product Sell
            </div>
            <div className='right_search' style={{marginTop:'35px',width:'387px',
          marginLeft:'26px'}}>
              <div>
                <BsSearch className='search2'/>
                <input className='input2'  placeholder='search'/>
              </div>
              <div className='quarterly' style={{color:'darkgray',marginRight:'19px'}}>
                Last 30 days <RiArrowDropDownLine/>
              </div>
            
            </div>
          </div>
          <div className='name_section'>
            <div style={{color:'darkgray'}}>Product Name</div>
            <div className='right_section'>
              <div style={{color:'darkgray'}} >Stock</div>
              <div style={{color:'darkgray'}}>Price</div>
              <div style={{color:'darkgray'}}>Total Sales</div>
            </div>
          </div>
          <hr/>
          <div className='last_section'>
            <div className='img_Section'>
              <img width={'86px'} src='data:image/jpeg;base64,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'/>
              <div>
                <h4>Abstract 3D</h4>
                <p style={{color:'darkgray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className='last_right'>
              <div>32 in stock</div>
              <div>$ 45.99</div>
              <div>20</div>
            </div>
          </div>
          <div className='last_section'>
            <div className='img_Section'>
              <img width={'86px'} src='data:image/jpeg;base64,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'/>
              <div>
                <h4>Abstract 3D</h4>
                <p style={{color:'darkgray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className='last_right'>
              <div>32 in stock</div>
              <div>$ 45.99</div>
              <div>20</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App