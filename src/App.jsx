import React, { useEffect, useMemo, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";
function getImageUrl(name) {
  return new URL(`../public/images/${name}`, import.meta.url).href;
}

{
  /* <div className="text-lg text-red">{`Còn ${Math.floor((Date.parse("2024/10/22") - new Date()) / 86400000)} ngày nữa !!!`}</div> */
}

const Divider = () => (
  <div className="w-[20%] border-t-[1px] border-primary mx-auto my-2 "></div>
);
const PageCover = React.forwardRef((props, ref) => {
  return (
    <div
      className="cover w-full h-full flex flex-col justify-center items-center relativep-2 text-center bg-red"
      ref={ref}
      data-density="hard"
    >
      {props.children}
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="page flex flex-col text-md font-primary text-primary justify-center items-center space-y-3 text-center p-2"
      ref={ref}
    >
      {props.children}
    </div>
  );
});
function App() {
  const [isGroomFriend, setIsGroomFriend] = useState(false);

  return (
    <div className="flex justify-start items-start m-[0 auto] w-[100vw] h-[100vh] p-3">
      <HTMLFlipBook
        maxWidth={900}
        maxHeight={1161}
        minWidth={400}
        minHeight={516}
        width={500}
        height={645}
        showCover={true}
        flippingTime={1000}
        maxShadowOpacity={1}
        size="stretch"
        style={{ margin: "0 auto" }}
      >
        <PageCover>
          <img
            src={getImageUrl("14.JPG")}
            className="w-auto h-[100%] object-cover mx-auto p-2"
          />
          <div className="flex flex-col items-center absolute font-secondary text-[50px] top-4 left-0 right-0 text-[white] ">
            <div className="text-3xl">Save the date</div>
            <div className="text-3xl">22.10.2024</div>
          </div>
        </PageCover>
        <Page number="1">
          <div className="flex text-md w-full">
            <div className="flex-1 text-center ">
              <div className=""> Nhà gái </div>
              <div className="">Cổ phụ : NGUYỄN ĐỨC NGUYÊN</div>
              <div className=""> Bà : TRẦN VIỆT LIÊN</div>
              <div className="">
                131 Lê Phụng Hiểu,
                <br /> P.Vĩnh Bảo, TP.Rạch Giá,
                <br /> Kiên Giang
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className=""> Nhà trai </div>
              <div className="">Ông : NGUYỄN HOÀNG MINH</div>
              <div className=""> Bà : Quang Thị Ngọc Bích</div>
              <div className="">
                10 Quản Trọng Hoàng,
                <br /> P.Hưng Lợi, Q. Ninh Kiều,
                <br /> TP.Cần Thơ
              </div>
            </div>
          </div>

          <div className="">
            TRÂN TRỌNG BÁO TIN
            <br /> LỄ TÂN HÔN CỦA CON CHÚNG TÔI
          </div>

          <div className="text-5xl font-secondary tracking-wide flex flex-col space-y-2  ">
            <div className="font-primary text-sm"> Trưởng nam </div>
            <div> Minh Tâm </div>
            <div> & </div>
            <div> Bảo Trân </div>
            <div className="font-primary text-sm"> Út nữ</div>
          </div>
          <div>
            <div>Hôn lễ được cử hành tại tư gia</div>
            <div className="font-bold">10:00 | NGÀY 22 THÁNG 10 NĂM 2024</div>
            <div>Nhằm ngày 20/9 AL năm Giáp Thìn</div>
            <div>10 Quản Trọng Hoàng, P.Hưng Lợi, Q.Ninh Kiều, TP.Cần Thơ</div>
          </div>
        </Page>
        <Page number="2">
          <div>
            <div className="">TRÂN TRỌNG KÍNH MỜI QUÝ GIA ĐÌNH</div>
            <Divider />
            <div className="">
              ĐẾN DỰ BUỔI TIỆC CHUNG VUI CÙNG <br /> GIA ĐÌNH CHÚNG TÔI TẠI
            </div>
          </div>
          <div className="font-secondary text-3xl m-2">Mường Thanh Luxury</div>
          <div>
            <div className="">SẢNH TRÁN GIANG - TẦNG 4</div>
            <div className="">
              Khu E1, cồn Cái Khế, quận Ninh Kiều, thành phố Cần Thơ
            </div>
            <div className="">vào lúc</div>
          </div>

          <div className="text-3xl">17:30</div>
          <Divider />
          <div className="text-3xl">22.10.2024</div>
          <div className="">nhằm ngày 20/9 AL năm Giáp Thìn</div>
          <div className="">
            Sự hiện diện của Quý vị <br /> là niềm vinh hạnh của gia đình chúng
            tôi <br />
            Rất hân hạnh được đón tiếp
          </div>

          <div>
            <div className="font-secondary text-2xl m-2">Chủ hôn</div>
            <div className="">Ông Hoàn Minh - Bà Ngọc Bích</div>
            <Divider />
            <div className="">ĐÓN KHÁCH: 16H30</div>
            <div className="">KHAI TIỆC: 17H30</div>
          </div>
        </Page>
        {Array(20)
          .fill(0)
          .map((_, i) => {
            return (
              <PageCover>
                <img
                  src={getImageUrl(`${i + 1}.JPG`)}
                  className="w-auto h-[100%] object-cover mx-auto p-2"
                />
              </PageCover>
            );
          })}
      </HTMLFlipBook>
    </div>
  );
}

export default App;
