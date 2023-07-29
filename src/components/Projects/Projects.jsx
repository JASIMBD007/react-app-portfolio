import React from 'react';
import pandacommerce from '../../assets/pandacommerce.png';
import emajohn from '../../assets/emajohn.png';
import cardoctor from '../../assets/cardoctor.png';
import shoppingcart from '../../assets/shoppingcart.png';
import summai from '../../assets/summai.png';
import ProjectItem from '../ProjectItem/ProjectItem';

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-4'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-justify py-8'>
                Car Doctor, Ema-John, Panda Commerce, and Shopping Cart showcase my skills and expertise in web development. These projects demonstrate my ability to create strong, user-friendly applications for various industries. I specialize in building feature-rich websites that provide exceptional experiences to users. These projects highlight my commitment to meeting the specific needs of clients in the ever-changing online world.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={cardoctor} title="CarDoctor" link="https://genius-car-services-f6688.web.app/" />
                <ProjectItem img={emajohn} title="Ema John" link="https://emajohn-react-app.netlify.app/" />
                <ProjectItem img={pandacommerce} title="Panda Commerce" link="https://panda-ecommerce-de.netlify.app/?#" />
                <ProjectItem img={summai} title="Summ AI" link="https://summ-ai-app.netlify.app/" />
                <ProjectItem img={shoppingcart} title="Shopping Cart" link="https://jasimbd007.github.io/shopping-cart-js/" />
            </div>

        </div>
    )
}

export default Projects