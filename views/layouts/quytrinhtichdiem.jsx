import React, { Component } from 'react';
class Quytrinhtichdiem extends Component {
    render() {
        return (
            <section id="quytrinhtichdiem">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Quy trình tích điểm</h2>
                            <h3 className="section-subheading text-muted">Ba bước tích điểm Mcoin</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-image">
                                        <img class="rounded-circle img-fluid" src="/images/btn_left.png" alt="Bước 1"/>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>Bước 1</h4>
                                            <h4 class="subheading">Chọn cửa hàng</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">Chọn bất kỳ cửa hàng ưa thích nào của bạn có tích Mcoin dựa trên hóa đơn thuộc hệ thống</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <img class="rounded-circle img-fluid" src="/images/btn_right.png" alt="Bước 2"/>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>Bước 2</h4>
                                            <h4 class="subheading">Quét mã</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">Quét mã QR để tích điểm Mcoin</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-image">
                                        <img class="rounded-circle img-fluid" src="/images/btn_left.png" alt="Bước 3"/>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>Bước 3</h4>
                                            <h4 class="subheading">Nhận điểm</h4>
                                        </div>
                                        <div class="timeline-body">
                                            <p class="text-muted">Nhận Mcoin tích lũy</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <img class="rounded-circle img-fluid" src="/images/btn_gift.png" alt="Bước 4"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Quytrinhtichdiem;