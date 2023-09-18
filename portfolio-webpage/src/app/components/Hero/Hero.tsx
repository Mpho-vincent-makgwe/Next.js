import theme from './hero.module.css';
import Image from 'next/image';
const Hero = () => {
    return (
        <section  className={theme.hero}>
            <div className={theme.image}>
                <Image alt={`Mpho Vincent Makgwe`} src={`/Profile.jpg`} width={300} height={300}/>
            </div>
            <h1>Hi I'm Vincent</h1>
            <p>
                I blog about web development - especially frontend frameworks like React and BackEnd framework like NextJs.
            </p>
        </section>
    )
}

export default Hero
