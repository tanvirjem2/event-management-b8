import Navbar from "../Shared/Navbar";

const Hello = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-10">
                <h2 className="mb-4 font-semibold text-2xl">Amazing Features of the website</h2>
                <div className="space-y-4 w-11/12 mx-auto">

                    <p>
                        <strong>Unique Design and Concept:</strong> The website features a unique design and concept, ensuring it does not relate to any previous assignments or demo projects. This emphasizes originality in both design and content.
                    </p>

                    <p>
                        <strong>Multi-Section Home Page:</strong> The home page includes a responsive navigation bar, a dynamic banner/slider, services section with at least 6 event services, and a footer. It also integrates active routes in the navigation bar for seamless user navigation.
                    </p>

                    <p>
                        <strong>Service Detail Pages:</strong> Users can click on specific services to access detailed information displayed on service detail pages. These routes are protected, ensuring that only logged-in users can access them. Unauthorized users are redirected to the login page.
                    </p>

                    <p>
                        <strong>Email and Password Authentication: </strong> The website implements a robust email and password-based authentication system, complete with user registration and login pages. Users receive informative toasts/alerts upon successful registration or login, enhancing user experience.
                    </p>

                    <p>
                        <strong>Social Media Login Integration: </strong> In addition to email and password authentication, the website offers an extra login option using a social media platform, such as Facebook, GitHub, or Google, providing users with multiple authentication choices.
                    </p>

                    <p>
                        <strong>Error Handling and Feedback: </strong> The registration and login pages provide clear error messages, including password complexity requirements and email/password matching, ensuring users receive immediate feedback on any issues.
                    </p>

                    <p>
                        <strong>User Profile Integration:</strong> Once logged in, users can see their profile picture and username in the website header. This personalizes the user experience and allows for easy access to account information.
                    </p>

                    <p>
                        <strong>Logout Functionality:</strong> A logout button is available in the header for authenticated users. Clicking this button logs the user out of their account, enhancing security and providing a smooth logout experience.
                    </p>

                    <p>
                        <strong> Additional Private Routes: </strong> Two private routes are included, allowing the website to expand its functionality with relevant content. These private routes can be customized to add more features or information as needed.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Hello;