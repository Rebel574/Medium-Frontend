function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 fixed bottom-0 left-0 w-full z-50">
      <div className="container mx-auto px-2 py-1  md:py-2"> 
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-2 md:mb-0"> 
            <h2 className="text-lg font-semibold mb-1">About Us</h2> 
            <p className="text-xs">Developed By Rohit Nagtilak</p>
          </div>
          <div className="md:w-1/3 mb-2 md:mb-0"> 
            <h2 className="text-lg font-semibold mb-1">Quick Links</h2> 
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs">Contact</a></li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-1">Follow Us</h2> 
            <div className="flex space-x-2">
              <a href="#" className="text-gray-400 hover:text-white text-xs"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xs"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xs"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <p className="text-center mt-1 md:mt-2 text-xs">&copy; 2024 Medium . All rights reserved.</p> 
      </div>
    </footer>
  );
}


export default Footer;
  