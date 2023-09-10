const Hero = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p> Your feet deserve the best Your feet deserve the best Your feet deserve the best</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on ABC and XYZ</p>

                    <div className="brand-icons">
                        <img src="/images/logo.jpg"></img>
                        <img src="/images/logo.jpg"></img>
                    </div>
                </div>


            </div>
            <div className="hero-image">
                <img src="/images/shoe.png" height={600}></img>
            </div>
        </main>
    )
}

export default Hero;