<template>
  <div class="products" id="products">
    <h1 class="text-md-center">Our Products</h1>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div class="col">
          <div class="card product-item" style="width: 18rem;">
            <img src="../assets/img/img1.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">
                Tay Cầm Sony DualSense 5 PS5 Chính Hãng
              </h5>
              <p class="card-text">
                có thể sử dụng trên PC Và đặt biệt những ai đã làm quen với các
                tay cầm trên thệ thống PS2 PS3 PS4
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card product-item" style="width: 18rem;">
            <img src="../assets/img/img2.png" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">
                Tay Cầm Xbox One S Đen BLACK Special Edition
              </h5>
              <p class="card-text">
                – Hãng Sản Xuất: Microsoft<br />
                – Màu Sắc: ĐEN CARBON BLACK + USB-c Cable Zin SEAL USB
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card product-item" style="width: 18rem;">
            <img src="../assets/img/img3.jpg" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">
                Tay Cầm Xbox One S Arctic Camo Special Edition
              </h5>
              <p class="card-text">
                – Hãng Sản Xuất: Microsoft <br />
                – Màu Sắc: Trắng Arctic Camo + Cáp Cable USB + Bọc Cần Analog
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card product-item" style="width: 18rem;">
            <img
              src="../assets/img/bandicam-2019-09-21-12-47-17-476_Fotor.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">
                Tay Cầm Chơi Game GameSir T4W Có Dây
              </h5>
              <p class="card-text">
                GameSir T4w là tay cầm có dây kết nối cổng USB của PC và Laptop
                1 cách đơn giản và thuận tiện
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
};
</script>

<style lang="scss" scoped>
.products {
  background-color: #f2f2f2;
  h1 {
    padding-top: 20px;
  }
  .product-item {
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s ease all;
    min-height: 420px;

    &:hover {
      transform: rotateZ(-1deg) scale(1.01);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    @media (max-width: 600px) {
      margin: auto;
    }
  }
}
</style>
