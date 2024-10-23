import logo from '@assets/logo.png'
import Button from './button'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="content flex w-full flex-col place-content-center items-center justify-center text-gray-400 lg:grid lg:grid-cols-3">
            <div className="social-links mb-6 flex gap-8 text-xl lg:mb-0">
              <a href="#" target="_blank" className="hover:text-gray-600">
                <i className="b bi-facebook"></i>
              </a>
              <a href="#" target="_blank" className="hover:text-gray-600">
                <i className="b bi-twitter-x"></i>
              </a>
              <a href="#" target="_blank" className="hover:text-gray-600">
                <i className="b bi-linkedin"></i>
              </a>
            </div>
            <Button
              to="/"
              as="link"
              className="order-first mx-auto mb-10 lg:order-none lg:mb-0"
            >
              <img src={logo} alt="Logo" className="h-6 w-auto" />
            </Button>
            <div className="footer-text">
              <p className="lg:text-right">
                © {new Date().getFullYear()} 3consulting, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
