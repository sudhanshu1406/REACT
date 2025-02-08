import './App.css'
import image2 from './image2.jpg'
function Navbar() {

    return (
        <>
            <section className='navbar'>
                <div><a href="#">HOME</a></div>
                <div><a href="#">SERVICE</a></div>
                <div><a href="#">ABOUT</a></div>
                <div><a href="#">SHOPING</a></div>
                <div><a href="#">LOGIN</a></div>
            </section>

            <section className='hero'>
                <section className='image'>
                    <div>
                        <img src="./image.jpg" alt="" />
                    </div>

                    <div>
                        <img src={image2} alt="" />
                    </div>
                </section>

                <section className='content'>
                    <div className='div1'>
                        <h1>hacker</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam assumenda cumque voluptatem error
                            accusamus, maxime autem nostrum, quos impedit nobis suscipit eveniet quia doloremque odio sit animi
                            distinctio necessitatibus eos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendi laboriosam eveniet, quaerat 
                            ea id sequi modi quae nobis illum? Culpa veniam necessitatibus enim, iure voluptas exercitationem non autem incidunt.
                        </p>
                    </div>

                    <div className='div1'>
                        <h1>tourism</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam assumenda cumque voluptatem error
                            accusamus, maxime autem nostrum, quos impedit nobis suscipit eveniet quia doloremque odio sit animi
                            distinctio necessitatibus eos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendi laboriosam eveniet, quaerat 
                            ea id sequi modi quae nobis illum? Culpa veniam necessitatibus enim, iure voluptas exercitationem non autem incidunt.
                        </p>
                    </div>
                </section>
            </section>

        </>
    )
}

export default Navbar