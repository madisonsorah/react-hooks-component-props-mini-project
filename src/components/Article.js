import React from "react";

function Article({ title, date = "January 1, 1970", preview }) {
    return (
        <article>
            <h3>{ title }</h3>
            <small>{ date }</small>
            <p>{ preview }</p>
        </article>

    );
}

export default Article;

// { emoji } { minutes }
// let emoji = "";

    // function round5(x) {
    //     return Math.ceil(x/5)*5;
    // }

    // function round10(x) {
    //     return Math.ceil(x/10)*10;
    // }
    // const rounded = round5(minutes);

    // if (rounded < 30) {
    //     const howMany = rounded / 5;
    //     for (let i = 1; i++; i <= howMany) {
    //         emoji += "☕️"
    //     }
    // } else if (rounded >= 30) {

    // }

// If the article takes less than 30 minutes to read:

// - For every 5 minutes (rounded up to the nearest 5), display a coffee cup emoji.
//   For example, if the article takes 3 minutes to read, you should display "☕️ 3
//   min read". If the article takes 7 minute, you should display "☕️☕️ 7 min
//   read".

// If the article takes 30 minutes or longer to read:

// - For every 10 minutes (rounded up to the nearest 10), display a bento box
//   emoji. For example, if the article takes 35 minutes to read, you should
//   display "🍱🍱🍱🍱 35 min read". If the article takes 61 minutes to read, you
//   should display "🍱🍱🍱🍱🍱🍱🍱 61 min read".

// Make an `Article` component as a child of `ArticleList`. It should return:

// - an `<article>` element, with the following elements inside:
//   - an `<h3>` element displaying the _title_ of the article, passed as a prop
//   - a `<small>` element displaying the _date_ of the article, passed as a prop
//     - a _default value_ of "January 1, 1970" should be used if no date is passed as a prop
//   - a `<p>` element displaying the _preview_ of the article, passed as a prop