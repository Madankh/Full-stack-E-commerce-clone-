import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import "./product.css"
import {productData} from "../dummydata"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                  <button className="productAddButton">Create</button>
                </Link>
            </div>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data = {productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://media.wired.com/photos/618048b16fe08d62522d94c2/3:2/w_2400,h_1600,c_limit/Gear-Apple-Airpods-3-2021-Review.jpg" alt="" className="productInfoImage" />
                    <span className="productName">Apple Airpot</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">action</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock</span>
                        <span className="productInfoValue">123</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productButtom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Apple AirPod" />
                    <label >In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label >Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://media.wired.com/photos/618048b16fe08d62522d94c2/3:2/w_2400,h_1600,c_limit/Gear-Apple-Airpods-3-2021-Review.jpg" alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
