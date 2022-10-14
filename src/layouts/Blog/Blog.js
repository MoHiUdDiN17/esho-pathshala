import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center">Frequently Asked Questions</h1>
            </div>
            <article className="container my-5">
                <div className="accordion px-5" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How React.js Works ?
                            </button>
                        </h2>
                        <div id="collapseOne" classNameName="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What are the differences between Props and state ?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>1.Props are read-only.On the other hand,State changes can be asynchronous.</p>
                                <p>2.Props are immutable.On the other hand,	State is mutable.</p>
                                <p>3.Props allow you to pass data from one component to other components as an argument.On the other hand,State holds information about the components.</p>
                                <p>4.Props can be accessed by the child component.On the other hand,State cannot be accessed by child components.</p>
                                <p>5.Stateless component can have Props.On the other hand,Stateless components cannot have State.</p>
                                <p>6.Props make components reusableOn the other hand,State cannot make components reusable.</p>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What are the usages of useEffect other than data loading?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                    you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Blog;