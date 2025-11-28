import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { dataSwiper } from "../data";

function TestimonialComponent() {
  return (
    <div className="testimonial-section mt-5 py-5">
      <div className="">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="fw-bold fs-2 text-danger">
            Apa kata mereka{" "}
            <span className="text-black">tentang kami?</span>
          </h1>
          <p className="text-secondary mt-2">
            Beberapa ulasan dari student kami yang sudah merasakan manfaatnya.
          </p>
        </div>

        {/* ROW ATAS – geser ke kiri */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          className="mb-4"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {dataSwiper.map((testi, index) => (
            <SwiperSlide key={index}>
              <Card className="testimonial-card p-3 text-center">
                <img src={testi.image} alt="avatar" className="testimonial-avatar mx-auto" />

                <Card.Body>
                  <h5 className="fw-semibold">{testi.skill}</h5>

                  <Card.Text className="testimonial-text mt-3">
                    “{testi.desc}”
                  </Card.Text>

                  <Button variant="outline-danger" size="sm" className="mt-3">
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ROW BAWAH – geser ke kanan */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,   // arah kebalikan
          }}
          speed={4000}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {dataSwiper.map((testi, index) => (
            <SwiperSlide key={index}>
              <Card className="testimonial-card p-3 text-center">
                <img src={testi.image} alt="avatar" className="testimonial-avatar mx-auto" />

                <Card.Body>
                  <h5 className="fw-semibold">{testi.skill}</h5>

                  <Card.Text className="testimonial-text mt-3">
                    “{testi.desc}”
                  </Card.Text>

                  <Button variant="outline-danger" size="sm" className="mt-3">
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}

export default TestimonialComponent;
