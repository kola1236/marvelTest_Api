import { CategoryItem } from './CategoryIrem';

function CategoryList({ catalog = [] }) {
    return (
        <div className='list'>
            {catalog.map((el) => (
                <CategoryItem key={el.id} {...el} />
            ))}
        </div>
    );
}

export { CategoryList };
