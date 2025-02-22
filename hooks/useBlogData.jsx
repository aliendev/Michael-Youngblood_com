import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ALL_ARTICLES_QUERY } from "../lib/contentfulSchema";

const useBlogData = () => {
    /*
    const [categoriesArray, handleCategoryArray] = useState([]);
    const [showCategories, handleShowCategories] = useState(false);
    const [categoryShown, setCategoryShown] = useState();
    const [blogArchiveShown, setBlogArchiveShown] = useState();
    const [filteredArticles, setFilteredArticles] = useState();
    const [blogArchiveData, handleBlogArchiveData] = useState([]);
    const [blogArticleCollection, setBlogArticleCollection] = useState({ items: [] });
    const { data: blogArticleData = {} } = useQuery(ALL_ARTICLES_QUERY);

    const { items } = blogArticleCollection;

    useEffect(() => {
        return () => document.body.classList.remove("overflow-hidden");
    }, []);

    useEffect(() => {
        setBlogArticleCollection(blogArticleData.blogArticleCollection?.items ?  blogArticleData.blogArticleCollection :  { items: [] })
    }, [blogArticleData])

    useEffect(() => {
        const blogArchiveObj = {};
        blogArticleData?.blogArticleCollection?.items?.forEach((item) => {
            if (item.articleDate) {
                const newDate = new Date(item.articleDate);
                const month = newDate.toLocaleDateString("en-US", {
                    month: "long",
                });
                const year = newDate.toLocaleDateString("en-US", {
                    year: "numeric",
                });

                if (blogArchiveObj[year]) {
                    const isMonthPressnt = blogArchiveObj[year]?.findIndex(
                        (year) => year.name === month
                    );
                    if (isMonthPressnt > -1) {
                        blogArchiveObj[year][isMonthPressnt].count =
                            blogArchiveObj[year][isMonthPressnt].count + 1;
                    } else {
                        blogArchiveObj[year] = [
                            ...blogArchiveObj[year],
                            { name: month, count: 1 },
                        ];
                    }
                } else {
                    blogArchiveObj[year] = [{ name: month, count: 1 }];
                }
            }
        });
        const blogArchiveData = Object.entries(blogArchiveObj)
            .map(([year, months, id], index) => ({
                year,
                months,
                id,
                expanded: false,
            }))
            .sort((a, b) => b.year - a.year);
        handleBlogArchiveData([...blogArchiveData]);
    }, [ blogArticleData.blogArticleCollection ]);

    useEffect(() => {
        const categoriesArr = [];
        blogArticleData?.blogArticleCollection?.items?.forEach((item) => {
            item?.categoriesCollection?.items?.forEach((item) => {
                categoriesArr.push(item.title);
            });
        });
        const categoryArr = categoriesArr.flat().filter((ele) => ele);
        const countObj = {};
        categoryArr.forEach(
            (item) => (countObj[item] = countObj[item] ? countObj[item] + 1 : 1)
        );
        const categoryData = Object.entries(countObj).map(([label, count]) => ({
            label,
            count,
        }));
        handleCategoryArray([...categoryData]);
    }, [ blogArticleData.blogArticleCollection ]);

    useEffect(() => {
        if (showCategories) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [showCategories]);

    useEffect(() => {
        if (categoryShown) {
            const filteredItems = items.filter((item) => {
                return (item?.categoriesCollection?.items || [])?.filter(
                    (item) => item.title === categoryShown
                )?.length;
            });
            setFilteredArticles(filteredItems);
        }
    }, [categoryShown, items]);

    const getRelatedPosts = (categories, id) => {
        let filteredItems = [];

        items.forEach((blog) => {
            categories.forEach((category) => {
                (blog?.categoriesCollection?.items || [])?.forEach((item) => {
                    if (item.title === category) {
                        filteredItems.push(blog);
                    }
                });
            });
        });
        filteredItems = filteredItems
            ?.filter((post) => post?.sys?.id !== id)

        if (filteredItems.length > 5) {
            return filteredItems.slice(0, 5);
        }
        return filteredItems;
    };

    useEffect(() => {
        if (blogArchiveShown) {
            const filteredItems = items.filter((item) => {
                const newDate = new Date(item.articleDate);
                const month = newDate.toLocaleDateString("en-US", {
                    month: "long",
                });
                const year = newDate.toLocaleDateString("en-US", {
                    year: "numeric",
                });
                return (
                    month === blogArchiveShown.month &&
                    year === `${blogArchiveShown.year}`
                );
            });
            setFilteredArticles(filteredItems);
        }
    }, [blogArchiveShown, items]);

    return {
        showCategories,
        handleShowCategories,
        categoryShown,
        setCategoryShown,
        getRelatedPosts,
        categoriesArray,
        setBlogArchiveShown,
        blogArchiveShown,
        filteredArticles,
        items,
        setFilteredArticles,
        blogArchiveData,
        handleBlogArchiveData,
    };
*/
};

export default useBlogData;
