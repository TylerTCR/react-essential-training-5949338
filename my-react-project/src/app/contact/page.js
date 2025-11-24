export default function Page() {
    async function submitContactForm(formData) {
        "use server";
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        };
        console.log("formFields", formFields);
        // This is where we would send the data to a database...
        console.log("TODO: Send these form field values to a backend...");
        return formFields;
    }

    return (
        <main className="max-w-md mx-auto p-6 bg-slate-700 shadow-md rounded-md">
            <h1 className="text-2xl font-bold text-center mb-6">Contact Me!</h1>
            <form className="space-y-4" action={submitContactForm}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white-200">Email</label>
                    <input id="email" type="email" name="email" placeholder="example@email.com" required
                        className="border border-gray-400 focus:border-black" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white-200">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Type here..." required
                        className="border border-gray-400 focus:border-black" />
                </div>
                <button type="submit" className="text-black bg-white rounded-md p-3">Send Message</button>
            </form>
        </main>
    )
}