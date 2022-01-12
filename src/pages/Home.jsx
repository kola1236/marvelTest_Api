import { useState, useEffect } from 'react';

import { CategoryList } from '../components/CategoryList';
import { getAllCategories } from '../api';

function Home() {
    const hash = '5dd8a968c5a6a76b787129fe23eea996';
    const [catalog, setCatalog] = useState([]);
    useEffect(() => {
        getAllCategories().then((res) => {
            setCatalog(res.data.results);
        });
    }, [hash]);

    return <CategoryList catalog={catalog} />;
}
export { Home };
