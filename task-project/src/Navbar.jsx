import './App.css'
function Navbar() {
    return (
        <>
            <section id="navbar">
                <article>
                    <div class="img1">
                        <img
                            src="https://www.tcs.com/content/dam/global-tcs/en/images/home/tcs-logo-1.svg"
                            alt=""
                        />
                    </div>
                </article>

                <article class="ar2">
                    <div>
                        <a href="#">What we do <i class="fa-solid fa-angle-down"></i></a>
                    </div>
                    <div>
                        <a href="#">Who we are <i class="fa-solid fa-angle-down"></i></a>
                    </div>
                    <div>
                        <a href="#">Insights <i class="fa-solid fa-angle-down"></i></a>
                    </div>
                    <div>
                        <a href="#">Careers <i class="fa-solid fa-angle-down"></i></a>
                    </div>
                    <div>
                        <a href="#">Newsroom <i class="fa-solid fa-angle-down"></i></a>
                    </div>
                    <div>
                        <a href="#">Investors <i class="fa-solid fa-angle-down"></i></a>
                    </div>
                </article>

                <article class="ar3">
                    <div class="div1"><a href="#">CONTACT US</a></div>
                    <div class="div2"><a href="#">TCS WORLDWIDE</a></div>
                </article>

                <article>
                    <div class="icon">
                        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                </article>

                <article>
                    <div class="img2">
                        <img
                            src="https://www.tcs.com/content/dam/global-tcs/en/images/home/tata-logo-1.svg"
                            alt=""
                        />
                    </div>
                </article>
            </section>
        </>
    )
}

export default Navbar