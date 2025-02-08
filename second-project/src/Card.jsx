import './App.css'
function Card(){
    return (
        <>
        <section className="card">
            <article>
            <div className="img">
                <img src="./image3.jpg" alt="" />
            </div>
            <div className="head">
                <h1>PHOTOGRAPHY</h1>
            </div>
            <div className="para">
                <p>
                    Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Tenetur, iure harum.
                </p>
            </div>
            <div className="btn">
                <button>Read More</button>
            </div>
            </article>
        </section>
        </>
    )
}
export default Card