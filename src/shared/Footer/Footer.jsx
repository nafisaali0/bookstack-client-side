import moment from 'moment';
const Footer = () => {
    return (
        <>
            {/* <div className='bg-black px-5 lg-px-0 '>
                <div className='container mx-auto py-10'>
                    <div className='flex flex-col justify-start items-start py-5'>
                        BookStack
                    </div>
                    <footer className="footer py-5 bg-black text-white">
                        <div className='text-white'>
                            <h6 className="text-light_blue">Features</h6>
                            <a className="link link-hover">Create Blog</a>
                            <a className="link link-hover">Manage Blog</a>
                            <a className="link link-hover">Add Reading List</a>
                            <a className="link link-hover">Like & Comment</a>
                        </div>
                        <div className='text-white'>
                            <h6 className="text-light_blue">Features</h6>
                            <a className="link link-hover">Search Blogs</a>
                            <a className="link link-hover">Follow Blogger</a>
                            <a className="link link-hover">Profile Settings</a>
                        </div>
                        <div className='text-white'>
                            <h6 className="text-light_blue">Pages</h6>
                            <a className="link link-hover">Home</a>
                            <a className="link link-hover">Add Blogs</a>
                            <a className="link link-hover">Details Blog</a>
                        </div>
                        <div className='text-white'>
                            <h6 className="text-light_blue">Pages</h6>
                            <a className="link link-hover">Feature Blog</a>
                            <a className="link link-hover">WhishList</a>
                            <a className="link link-hover">Dashboard</a>
                        </div>
                        <div className='text-white'>
                            <h6 className="text-light_blue">Solution</h6>
                            <a className="link link-hover">Education</a>
                            <a className="link link-hover">Life Knowledge</a>
                        </div>
                    </footer>
                    <footer className="footer border-t border-light_purple py-5 bg-black text-white">
                        <aside className="items-center grid-flow-col">
                            <p>© 2024 JEST BLOG.<br />Created by Nafisa Ali</p>
                        </aside>
                    </footer>
                </div>
            </div> */}

            {/* checking */}
            

            <div className="bg-black px-5 lg:px-0">
                <div className="container mx-auto py-10">
                    <div className="flex flex-col justify-start items-start py-5">
                        <h1 className="text-white text-3xl font-bold">BookStack</h1>
                    </div>

                    <footer className="footer py-5 bg-black text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <div>
                            <h6 className="text-light_blue text-lg font-semibold mb-2">Book Management</h6>
                            <a className="link link-hover mb-1">Create New Blog</a>
                            <a className="link link-hover mb-1">Manage Your Blogs</a>
                            <a className="link link-hover mb-1">Add to Reading List</a>
                            <a className="link link-hover mb-1">Like & Comment on Books</a>
                        </div>
                        <div>
                            <h6 className="text-light_blue text-lg font-semibold mb-2">Explore Books</h6>
                            <a className="link link-hover mb-1">Search for Blogs</a>
                            <a className="link link-hover mb-1">Follow Authors</a>
                            <a className="link link-hover mb-1">Book Recommendations</a>
                        </div>
                        <div>
                            <h6 className="text-light_blue text-lg font-semibold mb-2">Useful Pages</h6>
                            <a className="link link-hover mb-1">Home</a>
                            <a className="link link-hover mb-1">Add New Blog</a>
                            <a className="link link-hover mb-1">Blog Details</a>
                        </div>
                        <div>
                            <h6 className="text-light_blue text-lg font-semibold mb-2">Additional Links</h6>
                            <a className="link link-hover mb-1">Featured Books</a>
                            <a className="link link-hover mb-1">Wishlist</a>
                            <a className="link link-hover mb-1">User Dashboard</a>
                        </div>
                    </footer>

                    <footer className="footer border-t border-light_purple py-5 bg-black text-white mt-5">
                        <aside className="text-center">
                            <p className="text-sm">© {moment().format('YYYY')} BookStack. <br />Created by Nafisa Ali</p>
                        </aside>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default Footer
