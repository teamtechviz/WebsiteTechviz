

export const TechvizVideo = () => {
    return (
        <>
        <section>
                    <div className="embed-responsive embed-responsive-16by9" style={{textAlign: 'center'}}>
                        <iframe 
                            className="embed-responsive-item"
                            id="techviz_video"
                            src="https://www.youtube.com/embed/P0oA0bsEiw4?si=bTOkj5ZNaEe1XO9d" 
                            title="YouTube video player" 
                            style={{border: "0"}} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>
        </>
    );
}