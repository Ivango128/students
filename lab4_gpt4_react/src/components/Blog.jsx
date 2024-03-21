import blogData from "../mockData/blogData";

export const CreateHeaderBlogTemplate = ({header}) => {
    return (
    <div className="header_blog">
        <h1>{header}</h1>
    </div>
    );
};

export const CreateBlogLeftArtTemplate = ({item}) => {
    const {isMaimArt, img: {src, alt}, description:{date, header, link: {href, label}}} = item  ;
    if (isMaimArt){
        return (
        <>
        <img src={src} alt={alt}/>
        <div className="description__art__main">
        <div className="data__description">
            <p className="date">{date}</p>
            <p className="head_main_art">{header}</p>
        </div>
        <a href={href} className="read_art_main">{label}</a>
        </div>
        </>
        );
    }
};
export const CreateBlogRightArtTemplate = ({item}) => {
    const {isMaimArt, img: {src, alt}, description:{date, header, link: {href, label}}} = item;
    if (!isMaimArt){
        return (
            <>
            <div className="one_minor_art">
            <img src={src} alt={alt}/>
            <div className="description_art">
                <p className="date">{date}</p>
                <p className="head_minor_art">{header}</p>
                <a href={href} className="read_art_main">{label}</a>
            </div>
            </div>
            </>
        );
    }
};  


const Blog = () => {
    const {blogHeaderData, blogDescData} = blogData;
    return(
        <>
        <CreateHeaderBlogTemplate blogHeaderData = {blogHeaderData}/>
        <div className="all_art">
            <div className="left_art">
                {blogDescData.map((item, index) => (<CreateBlogLeftArtTemplate key={index} item={item}/>))}
            </div>
            <div className="right_art">
                {blogDescData.map((item, index) => (<CreateBlogRightArtTemplate key={index} item={item}/>))}
            </div>
        </div>
        </>
    );
    
};

export default Blog;

