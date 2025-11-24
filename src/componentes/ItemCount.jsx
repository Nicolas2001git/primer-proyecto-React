import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
function ItemCount({ quantity, onIncrease, onDecrease }) {
  const min = 1;
  const max = 5;
  return (
    <div className="item-count-tierra-media">
      <Button type="primary" shape="circle" icon={<MinusOutlined />} onClick={onDecrease} disabled={quantity <= min}/>
      <p className="contador-medieval">
        {quantity}
      </p>
      <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={onIncrease} disabled={quantity >= max}/>
    </div>
  );
}
export default ItemCount;
