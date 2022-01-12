function CategoryItem(props) {
    const {
        title,
        thumbnail: { path, extension },
    } = props;
    const imgSrc = path + '/portrait_xlarge.' + extension;
    const not_available = 'image_not_available';

    var hide = '';
    if (path.lastIndexOf(not_available) !== -1) {
        hide = 'hide';
    }
    console.log(path);
    return (
        <div className={hide}>
            <div className='card-image'>
                <img src={imgSrc} alt={title} />
                <div>{title}</div>
            </div>
        </div>
    );
}

export { CategoryItem };
