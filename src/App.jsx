import React, { useEffect, useMemo, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css";
function getImageUrl(name) {
  return new URL(`../public/photos/${name}`, import.meta.url).href;
}

{
  /* <div className="text-lg text-red">{`Còn ${Math.floor((Date.parse("2024/10/22") - new Date()) / 86400000)} ngày nữa !!!`}</div> */
}

const Divider = () => (
  <div className=" w-[20%] border-t-[1px] border-primary mx-auto my-1 md:my-2 "></div>
);
const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover  w-full h-full p-2 text-center bg-red" ref={ref}>
      {props.children}
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="page  w-full h-full text-md font-primary text-primary space-y-3 text-center p-2 flex items-stretch"
      ref={ref}
    >
      {props.children}
    </div>
  );
});

const Tam = () => {
  return (
    <div className="w-full h-auto md:w-auto md:h-full flex justify-start items-start">
      <HTMLFlipBook
        maxWidth={500}
        maxHeight={800}
        minWidth={350}
        minHeight={560}
        width={500}
        height={800}
        flippingTime={1000}
        maxShadowOpacity={1}
        size="stretch"
        style={{ padding: 2, margin: "0 auto" }}
        className="flex"
      >
        <PageCover>
          <img
            src={getImageUrl("14.jpg")}
            className="h-full w-full object-cover mx-auto my-auto "
          />
          <div className="flex flex-col items-center absolute font-secondary text-[50px] top-4 left-0 right-0 text-[white] ">
            <div className="text-3xl">Save the date</div>
            <div className="text-3xl font-primary">22.10.2024</div>
          </div>
        </PageCover>
        <Page number="1">
          <div className="flex-1 h-full flex flex-col  md:space-y-12 space-y-6 mt-5 md:mt-10">
            <div className="flex  w-full text-sm md:text-md ">
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
              <div>
                10 Quản Trọng Hoàng, P.Hưng Lợi, Q.Ninh Kiều, TP.Cần Thơ
              </div>
            </div>
          </div>
        </Page>
        <Page number="2">
          <div className="flex-1 h-full flex flex-col  md:space-y-6 md:mt-10   space-y-2 mt-5 ">
            <div>
              <div className="">TRÂN TRỌNG KÍNH MỜI QUÝ GIA ĐÌNH</div>
              <Divider />
              <div className="">
                ĐẾN DỰ BUỔI TIỆC CHUNG VUI CÙNG <br /> GIA ĐÌNH CHÚNG TÔI TẠI
              </div>
            </div>
            <div className="font-secondary text-4xl m-2">
              Mường Thanh Luxury
            </div>
            <div>
              <div className="">SẢNH TRÁN GIANG - TẦNG 4</div>
              <div className="md:text-md text-sm">
                Khu E1, cồn Cái Khế, quận Ninh Kiều, thành phố Cần Thơ
              </div>
              <div className="">vào lúc</div>
            </div>

            <div>
              <div className="text-3xl">17:30</div>
              <Divider />
              <div className="text-3xl">22.10.2024</div>
            </div>
            <div className="">nhằm ngày 20/9 AL năm Giáp Thìn</div>
            <div className="">
              Sự hiện diện của Quý vị <br /> là niềm vinh hạnh của gia đình
              chúng tôi <br />
              Rất hân hạnh được đón tiếp
            </div>

            <div>
              <div className="font-secondary text-4xl m-2">Chủ hôn</div>
              <div className="">Ông Hoàn Minh - Bà Ngọc Bích</div>
              <Divider />
              <div className="">ĐÓN KHÁCH: 16H30</div>
              <div className="">KHAI TIỆC: 17H30</div>
            </div>
          </div>
        </Page>
        <Page number="3">
          <div className="flex-1 h-full flex flex-col mt-5 md:mt-10">
            <div className="">Địa chỉ</div>
            <Divider />
            <div className="font-secondary text-4xl m-2 ">
              Mường Thanh Luxury
            </div>
            <div className="">SẢNH TRÁN GIANG - TẦNG 4</div>
            <div className="md:text-md text-sm">
              Khu E1, cồn Cái Khế, quận Ninh Kiều, thành phố Cần Thơ
            </div>
            <a
              href="https://maps.app.goo.gl/7w8robveBqNtcJzv6"
              target="_blank"
              className="visited:text-primary hover:text-primary text-primary"
            >
              <img
                src={getImageUrl(`tam-maps.png`)}
                className="md:w-[300px] md:h-[300px] w-[250px] h-[250px] object-cover mx-auto p-2 border rounded-full mt-10"
              />
            </a>
          </div>
        </Page>
        <PageCover number="4">
          <div className="flex-1 h-full flex flex-col justify-center items-center ">
            <div className="text-[white] font-primary  m-2 text-center text-lg">
              Một chút kỉ niệm của
            </div>
            <div className="text-[white] font-secondary  text-3xl">
              Minh Tâm <br />&<br /> Bảo Trân
            </div>
          </div>
        </PageCover>
        {Array(20)
          .fill(0)
          .map((_, i) => {
            return (
              <PageCover>
                <img
                  src={getImageUrl(`${i + 1}.jpg`)}
                  className="w-auto h-[100%] object-cover mx-auto p-2"
                />
              </PageCover>
            );
          })}
      </HTMLFlipBook>
    </div>
  );
};

const Tran = () => {
  return (
    <div className="w-full h-auto md:w-auto md:h-full flex justify-start items-start">
      <HTMLFlipBook
        maxWidth={500}
        maxHeight={800}
        minWidth={350}
        minHeight={560}
        width={500}
        height={800}
        flippingTime={1000}
        maxShadowOpacity={1}
        size="stretch"
        style={{ padding: 2, margin: "0 auto" }}
        className="flex"
      >
        <PageCover>
          <img
            src={getImageUrl("14.jpg")}
            className="h-full w-full object-cover mx-auto my-auto "
          />
          <div className="flex flex-col items-center absolute font-secondary text-[50px] top-4 left-0 right-0 text-[white] ">
            <div className="text-3xl">Save the date</div>
            <div className="text-3xl font-primary">22.10.2024</div>
          </div>
        </PageCover>
        <Page number="1">
          <div className="flex-1 h-full flex flex-col   md:space-y-6 md:mt-10   space-y-2 mt-5 ">
            <div className="flex  w-full text-sm md:text-md ">
              <div className="flex-1 text-center ">
                <div className=""> Nhà gái </div>
                <div className="">Cổ phụ : NGUYỄN ĐỨC NGUYÊN</div>
                <div className=""> Bà : TRẦN VIỆT LIÊN</div>
                <div className="text-sm md:text-md">
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
              <div className="font-primary text-sm"> Út nữ</div>
              <div> Bảo Trân </div>
              <div> & </div>
              <div> Minh Tâm </div>
              <div className="font-primary text-sm"> Trưởng nam </div>
            </div>
            <div>
              <div>Hôn lễ được cử hành tại tư gia</div>
              <div className="font-bold">07:00 | NGÀY 22 THÁNG 10 NĂM 2024</div>
              <div>Nhằm ngày 20/9 AL năm Giáp Thìn</div>
              <div>
                131 Lê Phụng Hiểu, P. Vĩnh Bảo, TP. Rạch Giá, Kiên Giang
              </div>
            </div>
          </div>
        </Page>
        <Page number="2">
          <div className="flex-1 h-full flex flex-col  md:space-y-6 md:mt-10   space-y-2 mt-5 ">
            <div>
              <div className="">TRÂN TRỌNG KÍNH MỜI QUÝ GIA ĐÌNH</div>
              <Divider />
              <div className="">
                ĐẾN DỰ BUỔI TIỆC CHUNG VUI CÙNG <br /> GIA ĐÌNH CHÚNG TÔI TẠI
              </div>
            </div>
            <div className="font-secondary md:text-4xl text-4xl m-2">
              Nhà hàng Royal
            </div>
            <div>
              <div className="">SẢNH DIAMON</div>
              <div className="text-sm md:text-md">
                Lô 9-10-11 khu biệt thự Công viên Lạc Hồng, <br /> P. Vĩnh Lạc,
                TP. Rạch Giá, Kiên Giang
              </div>
              <div className="">vào lúc</div>
            </div>

            <div>
              <div className="text-3xl">11:00</div>
              <Divider />
              <div className="text-3xl">21.10.2024</div>
            </div>
            <div className="">nhằm ngày 19/9 AL năm Giáp Thìn</div>
            <div className="">
              Sự hiện diện của Quý vị <br /> là niềm vinh hạnh của gia đình
              chúng tôi <br />
              Rất hân hạnh được đón tiếp
            </div>

            <div>
              <div className="font-secondary text-4xl m-2">Chủ hôn</div>
              <div className="">Bà Việt Liên</div>
              <Divider />
              <div className="">ĐÓN KHÁCH: 10H</div>
              <div className="">KHAI TIỆC: 11H</div>
            </div>
          </div>
        </Page>
        <Page number="3">
          <div className="flex-1 h-full flex flex-col mt-5 md:mt-10 ">
            <div className="">Địa chỉ </div>
            <Divider />
            <div className="font-secondary md:text-3xl text-4xl m-2">
              Nhà hàng Royal
            </div>
            <div className="">SẢNH DIAMON</div>
            <div className="">
              Lô 9-10-11 khu biệt thự Công viên Lạc Hồng, <br /> P. Vĩnh Lạc,
              TP. Rạch Giá, Kiên Giang
            </div>
            <a
              href="https://maps.app.goo.gl/FVjcYjCUdQK5SRAi6"
              target="_blank"
              className="visited:text-primary hover:text-primary text-primary"
            >
              <img
                src={getImageUrl(`tran-maps.png`)}
                className="md:w-[300px] md:h-[300px] w-[250px] h-[250px] object-cover mx-auto p-2 border rounded-full mt-10"
              />
            </a>
          </div>
        </Page>
        <PageCover number="4">
          <div className="flex-1 h-full flex flex-col justify-center items-center ">
            <div className="text-[white] font-primary  m-2 text-center text-lg">
              Một chút kỉ niệm của
            </div>
            <div className="text-[white] font-secondary  text-3xl">
              Minh Tâm <br />&<br /> Bảo Trân
            </div>
          </div>
        </PageCover>
        {Array(39)
          .fill(0)
          .map((_, i) => {
            return (
              <PageCover>
                <img
                  src={getImageUrl(`${i + 1}.jpg`)}
                  className="w-auto h-[100%] object-cover mx-auto p-2"
                />
              </PageCover>
            );
          })}
      </HTMLFlipBook>
    </div>
  );
};
function App() {
  const isGroomFriend = window.location.href.endsWith("nha-gai");
  console.log(isGroomFriend);

  return isGroomFriend ? <Tran /> : <Tam />;
}

export default App;
