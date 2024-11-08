import React, { useState } from 'react';
import './App.css';
import logo from "./img/icons8-facebook-32.png"

const App = () => {
  const categories = [
    {
      name: "น้ำและอาหาร",
      items: [
        "น้ำดื่ม (3 ลิตร/คน/วัน)",
        "อาหารแห้ง",
        "อาหารกระป๋อง",
        "ที่เปิดกระป๋อง",
        "ช้อนส้อม",
      ]
    },
    {
      name: "อุปกรณ์ปฐมพยาบาล",
      items: [
        "ชุดปฐมพยาบาล",
        "ยาประจำตัว",
        "หน้ากากอนามัย",
        "แอลกอฮอล์",
        "ผ้าพันแผล"
      ]
    },
    {
      name: "อุปกรณ์ฉุกเฉิน",
      items: [
        "ไฟฉาย",
        "ถ่านไฟฉายสำรอง",
        "วิทยุแบบใช้ถ่าน",
        "เพาเวอร์แบงค์",
        "นกหวีด"
      ]
    },
    {
      name: "เอกสารและการเงิน",
      items: [
        "สำเนาบัตรประชาชน",
        "สำเนาทะเบียนบ้าน",
        "เงินสดสำรอง",
        "ซองกันน้ำใส่เอกสาร",
        "สมุดบัญชี"
      ]
    },
    {
      name: "อุปกรณ์เสริม",
      items: [
        "เสื้อผ้าสำรอง",
        "ไม้ขีดไฟกันน้ำ",
        "เชือก",
        "ถุงขยะ",
        "มีดอเนกประสงค์"
      ]
    }
  ];

  const initialCheckedState = categories.reduce((acc, category) => {
    category.items.forEach(item => {
      acc[item] = false;
    });
    return acc;
  }, {});

  const [checkedItems, setCheckedItems] = useState(initialCheckedState);

  const totalItems = Object.keys(checkedItems).length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / totalItems) * 100;

  const handleCheck = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <div className="checklist-container">
      {/* Progress Section */}
      <div className="checklist-card">
        <h2 className="card-title">Emergency Kit Checklist</h2>
        <div className="space-y-2">
          <div className="progress-text">
            ความคืบหน้า: {checkedCount} จาก {totalItems} รายการ
          </div>
          <div className="progress-bar">
            <div style={{ width: `${progress}%`, backgroundColor: '#4f46e5', height: '100%' }} />
          </div>
        </div>
      </div>

      {/* Category Checklists */}
      {categories.map((category) => (
        <div key={category.name} className="checklist-card">
          <h3 className="card-title">{category.name}</h3>
          <div className="item-spacing">
            {category.items.map((item) => (
              <div key={item} className="checkbox-container">
                <input
                  type="checkbox"
                  id={item}
                  checked={checkedItems[item]}
                  onChange={() => handleCheck(item)}
                  className="checkbox-custom"
                />
                <label htmlFor={item} className="checkbox-label">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <footer className="footer">
        <p className="footer-text">Created by Narets Ng</p>
        <a href="https://www.facebook.com/profile.php?id=100001005871414" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={logo} className="footer-logo" alt="Facebook" />
          <span className="footer-social-text">Facebook</span>
        </a>
      </footer>
    </div>

  );
};

export default App;
