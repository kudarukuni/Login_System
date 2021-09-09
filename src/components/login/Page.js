export default function Page({ children }) {
    return (
        <div className="overflow-x-hidden">
            <div className="bg-login-background bg-cover bg-center w-screen h-screen  overflow-y-scroll flex flex-col justify-between overflow-x-hidden">
                {children}
            </div>
        </div>
    );
}
