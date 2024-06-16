import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Header(){
    return(
        <div className="container-fluid bg-body-secondary">
            <div className="container d-flex justify-content-between align-items-center py-4">
                <div className="fs-4 fw-bold text-secondary">Logo</div>
                <div className="navigation d-flex list-unstyled">
                    <li className="mx-4 fs-4"><a href="#" className="text-decoration-none text-dark fw-medium">Home</a></li>
                    <li className="mx-4 fs-4"><a href="#" className="text-decoration-none text-dark fw-medium">About</a></li>
                    <li className="mx-4 fs-4"><a href="#" className="text-decoration-none text-dark fw-medium">Contact</a></li>
                </div>
                <div className="icons d-flex list-unstyled">
                    <li className="ms-3 fs-5 text-secondary"><FaFacebookF /></li>
                    <li className="ms-3 fs-5 text-secondary"><FaTwitter /></li>
                    <li className="ms-3 fs-5 text-secondary"><FaInstagram /></li>
                </div>
            </div>
        </div>
    )
}