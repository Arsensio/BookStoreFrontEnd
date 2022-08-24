import React, {Component} from 'react';
import { FaInstagram,FaFacebook,FaWhatsapp,FaTiktok  } from "react-icons/fa";

class HomePageComponent extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <section className="slider_section">
                    <div className="carousel-item active">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h5>
                                            Welcome to Flup.kz
                                        </h5>
                                        <h1>
                                            For All Your <br/>
                                            Reading Needs
                                        </h1>
                                        <p>
                                            It is very easy to navigate on the pages of our portal - among the main categories you can find the necessary section and order any book from the thousands of assortment of the most popular publishers.                                        </p>
                                        <a href="/">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img
                                            src="https://lh3.googleusercontent.com/HCfEn4igWYWtbPVqjyLgKURiL73rImcvO84T9Wxy8HX9L4_Xp87eH_sFLfDG4S4Dt7qpwWXtikN2oolhmq2BgEuCO7oQrI7GclQ4D4u7LYUm33xjiJ-2PyFvDUAV6N2eih6QzDfGN_k2V-mJJvmCxW4MWBxEgBS0JGe7ytSwzVTrSGKGN61ysrLTWtpvX_v9lmqL7c14PTPyLBviob2bBCIY01jtkhRfhyRY1ulVrA9LG-iineM3cGOhl9ukZ0goFSMFBhFnd1jXV0G5-h8wd98hctfWFAphEVFqeO6Dje67JTS2I4D1k7bEuzBBfV6NvtWWhjZ0A2egJ4fdfFYHBZM70-V9Fk8xYvwZ0HAIG2ZKtublzdsMhnjo-OVBqRPySxNRDDUkV64hkkDQ1p72B-40XVhOeHhggurlgUoM0uZIPKLLWUBdKTaBFpL2LMOXxJkr7QC5ie8XAQCH6eyv-361gpTmoOftq87RLatmfNzz82XNGAmHGxyLKGoz6IivdGZ7RkV6oB0O1F0BUlJ_W0p6vC2YmeghshZxjIUsiateT-YdmRVqkhjx_gKKeKai5ZqEVJa8_T-wfwQOVM_zBMrCzkQRS7mb6ym1yqrmeFWEC_NtPlC2y-q8QmwzaBKNkNI_KhEo1w6Lr_AKnhz4q6OC0zScvmjPpbgzh_IvtSjA8QlcEFMULkW_l9kAQ1PwhUrSkVYFh-PIs6bBolecMH_cv_qTFtLyU1aSo4RsQmO5r5sPZ3_ukqjxBCU2ueHP21vfe0pKYdV215f9I7XWDMOO-FB6yxnuTClLVf1vvuMEsoFbo4PINQ4DMBp8kHKSzDP1iA=w924-h612-no?authuser=0"
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="catagory_section layout_padding">
                    <div className="catagory_container">
                        <div className="container ">
                            <div className="heading_container heading_center">
                                <h2>
                                    Books Categories
                                </h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-4 ">
                                    <div className="box">
                                        <div className="img-box">
                                            <img
                                                src="https://lh3.googleusercontent.com/6zR4x38YoQMwdB5JYRA3bQi3_JGoLoR5apzGMjWClHjGCfGnrNgcsvzls18McIPLOruxQCFpaOst0i0l5DLXMse13ZdYHTjfsp-aE5FcDGC_I5DUFQC1tWQoyneD8lG-3W7uTSjtwvFTX0e3YO3-AA3pwHCKSDwpRgb5BxYnydCPvf9qENfmv70iDUSEPJzEgiNhFEZAezIisAJmSiy7uCNfBVDQM9sByNB1pyEcLWl4iAJPUb0_G5UcD77zEXjneVlkBpVfJoVCWJV5H060QfkcVCl5CknukmbYszmlyAeoRNtXgNjgnZuJOPhC14kpIembL-kYx0M7foA6kvGP_6TtcRNdy_-PTnrHly_Juwl89QQj5IEpMbRnFr63kzi5ONIw5vB7c3rDflzxeqoLd76DqbfLMP2a-DFmGQpxpvpvVv4PMGQiQQOedDwpyQNE3FqrKCCmR3uepdMq76oW9oSC5PP9dTgwdtmfD2tAmXUXZJAKwTNgNXCL64byIClf--MYYaEoXnq9ydNlrtsCwcuM0tYtkpssXKSjnHIv5Cos45Gfo2tyBno6EClHe4hkE3OD7E3haVpFJpU1YE-e3NodZ0xzJ89mg3_WZH__FCOu3PJUY1ANVpwsjEju0YP47jsTYqk22Tip5e4CVXMBg68feNVIg_bzqU5oIkeC6SqBnbEZF_AakeRS1xq6hLDcugatvfvsrZtBPTv0eolFO02k0oq2gLUrzJOgMbId2HGUVMTs5mKMjK55Vd8pjIkJWDmwmVQiTzqn_43J6CVVsyUFhGvF4Lvls7-8ZNLw4jFF3Ckya9_AtuEpVUySXYeJNPneYw=w432-h512-no?authuser=0"
                                                alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Young adult
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 ">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img
                                                src="https://lh3.googleusercontent.com/UVDzcy33kNfsz-Qs0KH_opMRZN-KHBUQ_jTlDxl7-NLKJna9E2njLPV0xfG5nI43FRzxQMnIgjl8WU9XpZ4Z7M26ZYN5iJePPuj0HWaK5fYs9PbpdIPwoBhT24Dlb82l_roltolLWxq7wk7FpFH3o4BwBlvivD2IwpUs7A3CfuYQpnLIiaFX_Uw9fY8JlqG6x3ZWSyJO9TaTk5N7DHXR-NnKokmOAC2fi3zcl5JbYeMksiefFElSrhLEcb45U-CVtKLfqVVkHXYO8vmgAOofoKR39Tg_Gh9sZRy-ceJNAGDokGjRpjzIRx3KFWaGzqEDpYQO3-5vfXGBL8k67jMavf8XVOfEm8FBSk6PoBpik1fUq8pXn0WdQXfyiVe-Wi1hrI9UZNotvhefRuRzZnJhMCbYWqmvq2cklkbRHARf2jA3xzkzbPHKvNIWqkh5R1dP9ALTstbnXZ9Qaw-otMmXinJotQWJcfJZTXuXXnsdPYOYqRKuSPCqlkfVgY_koWP72JIiXGQvUGsVW4M5oHT0YbOXH-FeDbhErJ_stbv3OL3MC1dFmjMaYVPydY-S5b1PR-u9lV4K4hVer47u8N2D-oqs49RTSMELTqv4GupelDYC5VdLl1z2FJqadRJpYCCURqazYihQC9rQzf5bIejs7-82d2RbQQJ5KCG4a_aTg59x-Q9fc-96AkXETKhALr53gd8rgl5oAd5fY2TbHWl4Dgd_kjJfUScICfGK3aUXf7scdo_tGXeV8uBCHi1U-LLocQMA-1pJ7MZln_uv4ftRQ94BK3RLOGR_FhQiT68wUvt_cZ4J98HoKMeYrbWCrH5N39jThA=w512-h504-no?authuser=0"
                                                alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Science
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 ">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img
                                                src="https://lh3.googleusercontent.com/dmbr5Ekl0AD6AewHZl6JOjGkd05lKi7vADpTNcc4t4XqaAOdEXSK82cLbDb9RZzCA-noS4Izwa8P9qZnMSpApmvn6dfBNC7aJUwaweo2BerVbvQAF2DxvSQKuJpxgb-ScZJZU0C0_0r1u-OvUtZwUysv-2wvzmGAXhuxsqcAUp9d1uj3V9N0tLquTZMpHU14_yckl6vvh1-oOASMC2sQZ1EddK7vuyO7uH5urL7n9KuiOTG99lT3AUavqgkbteNHuOjot3IPCTDzP-Jq8c4_suk9ibJzHh-FXezEiWjGpeYsudBaeiXCGg4vZq5qV_z3DiDBwzMU0xfQSfNKiGF_Mp8Z7rmPYV2Yp0xYgkSq1xFF72C1vBhazOjnga3totHGKYJfMus4NZS13EcfVAGlxKROmvcYnffOOTv9-Nx31Gu7S7_ZM-7hP7KiKZVBWc7PTThWLUMJQ2j_XpSJeE_Vv8rHDn1n9p09BNXt6CZUStNWnZO7nHL4qIPI3Zq243e7chOrZclTZAnuSg5Dk2YJjNznTh1IAjkfRX2IfpnGQG070kIpSwk22kqOXH5kC24ih8MemMl0IfwUCNFvQ8W9sq7tHGJTZbKQsIGwVV5Qd5uV0x3TiRDL5uk_esibNLKsrOACZUIjetB7ZjrwGVd0oTR_PHUjw_3TIZnFg69gXhVi3y-xcfLvCBhFUkXcm5YLjqP6DTS4h6YashT-7Eh66Z7NrD1qk96ZxLH_KhNnqE_iVd8EWpB9oy1gEBX0XAyVxKBFCLzSFVbzlsBvYMiZdPYbn85YqL86ZxCLxBAL3kPxsXXYO1jjlayBakNCxsrEc7DWkg=w360-h361-no?authuser=0"
                                                alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Action literature
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 ">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img
                                                src="https://lh3.googleusercontent.com/2lpj9GXJF-Sr5k2UGmKj65No86b4iyGcgdv_D6Cu2JMEHDspczSq-fk0oyBugZe-GWconQVcGr1TwokudubEQEeovreIG9y7B7WbgLgO-Md_1sb7k9rhRZNB_LYsYA8kCncBs1Iz70A1R38ng3y72PsvSnczhAA4KghPkkwApEIEyitlSZVyo8rQQHttkRCZQ_4Nk8rA8qs35QsHb6wJ22gA0V0-dNYxMDXvIaNklYbo5WLYr7_qUbKLcBNK2wXuwg_2Br96aCVX-CBj05d3clkEqLTlwz9-HrhSkIXfS0pRWeRl09aT9B9vE1MyigJ1qJzR9qfn2KKoyaxEmKlp5NbsFxWJvdWLt2j7NDK1FRyFEPrPJda3xXMkDqLD0_7ozMkQ_6OJ_jsg_wXSj3goF58caPRCoSo9rlAe2yqKDm_J-v7iv4WP660KnpE07tbbTD7wVTcvJHdDJs7x-fhpiuyEpouUXtvRvBRUmcJ4pJ-RsIe4_WAh8b6npqsZtmzKUCHRpdXYYMmx_VTVzwBf8cxUcb44TwZm0gXbCOtimux8ikXabygX8kAoFeR9NVYxn6SmBXuViz7NRK8_1FZ80ATvmb0Y1WKR53Nwu74B-OvP-xC0AQLqRP3uNtmwJ7tcccU9W6sL2p8u53RcizpUxF0LScQprhQtRLsiwoeuuFjVzvIXn-r4qsYlEjIGoEgTmfCMqg1iH-t7464s3RLzuyW7iZYd1kdcGd4onVGjeYzi3gqNjhGX6g7vW1JcH3wE-E8sRfPtVTf1jFwG-f0nGPy4gjSa-q8A6aXpu1gbSQZCA6JxoZrb-A7cCgPr6FNaHFSPlg=s360-no?authuser=0"
                                                alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Detective
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 ">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img
                                                src="https://lh3.googleusercontent.com/tlmsVIefvrOXeeqJzgQRNxJLEmaqf9hMhewzGUfneqVsGnlI6UsZIXy7pvPg0N_Uo0xfObCGb2mnytXR9LGbqSKqrYF8fIrC2MLtFaGMhh2npO_HaeRuIbZWDvz5dagjCoRXvgxvI3S764W4fQgLmdCKd8zSRUx-MjqKUnzHIaMW6dsQpILjnYb8V952_xw0CAvvTBY-uxOS1cbZLvf5lymS4LKV6GsLTF44BRs89RYXBnIEwCw0fTC0VO3o6dN9iQGiPKwGd5LTZJs_TRZtlwjIu3s-LJ7eYvpJxBYLw_-Jwqco1vqnkuglUMY-lFMItIBLf4vIbW9qLkHfnRmLhOqyYUd8X1NX3g0Y9txGuGPWiccovFF5EI0NFAOFp-HOzMEoW8j6cBoAnGVe3wghlDy0rh-uBVnPWKHlawAS2ZOazmxeiDyWsYXyJ4i-uzjsMcUUniLyk3AVZ0iotMXL7bOBGmC3hs8_DTh4iMnpuvoGnvJ2P_kK_aZ7JgUhkLMt4EJLVJCjposKorcnwbwjj3TEaqo4g2uJKvAgb6RJshG09aOux4M8VJp83aZvujkIy_PWUF5ei9b1dDx3fxUiq-FfjDYGCj2n9R9o7uR_FrkV62j7Pbbgl0Idae2iEu_mckw1SQGcFj4u5ycV07snuZ178Mt8aD7C_R1V7nfKlkzRXrRMLHdmW7BJuGi_qAsCXrU9S20sp7MoUowyMNhNBvlB0rn3SVPGtASoQAKFQ8Y_8kZZ32PUq3FLb2fyJbp72gMCTB9SDhsoouwjhOB_6DmeufbeVP96_6mLu1KqOxxg9p8c7jZOyQPtSbQygXJh8plYCQ=w321-h384-no?authuser=0"
                                                alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Adventure
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4 ">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img
                                                src="https://lh3.googleusercontent.com/Ovyr0epB7xI59_0GRw5CkTrQ5HsW_Qa-DCIz1AUhN6G_QqRmv2q4l9CGnijVRUDCN2LfihM8MBMuyHGko4jQeR4qhUCaQBVhlwXUR_E0n4dHWhgliZvak4VgxwzpnLFRzNC4GoNOrMLAY7zDFr1Ef66pSGkanPetDwr1ZXiaS3LMCH9odCNoROX8bvxABEqBhdia-sETAzU_VtFjZyvuAthegs-xWK8QfFGXPAKxVfsCD-Vh6Hut3rUd2pPVa8IccNrMAati3f-6c2U3ujGwIEIKL2PIrZszvzom9x9uo-cOYCqLdn-ftENUZJCB2zWO97J9xcawdhTAj5sWMbBZ7wyE91vK5xw4GXxkZDxDhY4l3GOX-SDVfsu_lu-v7aATaeJHNPWUPoj3X_fOUIlFJ-RPjPqkRq7XqX0yf3dS1z3RZ92pFpawcQYDc1oTPCU3SEOCMq0zAcpselteoaQvNpi8tBvViRnHPikcEo8JZaLK9IZBQKLajPUZQ7aKuGj8j4rfx018q85XwnJYk-GiU17x3YUPdPi71CvRr3JRcnkbVKTnGrNZboi1gDEgynNHJ-8v5pN4KISvMMvnR2aRcp5WG0Mt8MXNhmMIgulDzC59g9LP2cOPRBckG8QK-_FdpBujoeO5G18eOj19LIgiV9ve6CU-N7JtdyuRiT-d3CksD95P3YyLJPJ1yYxU2zZsnXtvhOFT-qZiIEP9x41C3lssCgNk_TaDJImVKL5k8tAbw4kYRXhW_QIdYBv8YJC4hDJ4qEZDWkDC0dNv69HDFOOCI2txHi-CMu-FLqC5GQESc9B-c-BwFRIVHU3pSVL8S4C_Rg=s384-no?authuser=0"
                                                alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Fantasy
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about_section layout_padding">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img
                                        src="https://lh3.googleusercontent.com/xZAPIUDq7eY5NTMREGsJ6KZqhMmOUfSMRZnYQcpah1T7pWooOYkZNsa0u578j87LxT3Z8qXeXOJpPt6oiNj4ycoPOIMpArtvsRQuJQq9Qrm8e8xVeJaGnjXwl5ML2FPQ0luBtW85XajIesPwDsxw19IfeKB1A4ZGQKRFpykMP3CZs2jK5UPB9NjNZ-CFNOo6pxlGkm98ulbHVafhkLFfaNWurC4zDsydhgFHL_yz6VoS7uzowuweO7jU4uJFbnFk2QmN7BY6GDMzxkSqmEdl-KjbuSr80Gbjk4AFUC4b9N29zPyg0MM2_44JEsnqlxv56rv0SDgAocO2uKOFJhs79zk9NErB7HaYKNV2Yo0eEG4ToVd_pLxk2LgUxjAXumWD40YlfL883H64iXWtv2Ha20mJfgJxG49zW4d7pFsJqn0DBwc8R_rZc1AiDrIayzWQP3TMOwqo2a0sul2SBJfkP_mq1POnUgRpTUAIhISHdLBWE4YPFGbkPvwtqNNGBX95UkfHWgijYgmKscx6RypDre1OvrXzMPENlLj4HS7Kg2lP1SqDrKbOaxbPx3SRUq2zyyJJ3eFSVbwRYWBIhVJoZ2fXaqBhTH4AFG2Hhqeab8Sk-EvLoLk_hoAIdQf_c0QNqb5HbH3JmYekjj4bA8rxrTJEkISu11lbXLyZjfiRea7AePvus0jN3UP7AvtPiONJ_cYB-a8vVtopMGPMDBjroqaZKji31Oi6dG2pRVgGV9COnaxKjzxMWP1uKu8W_3jIKSu8hbeK6opGKdly6b0pA-IgrHwp_8oslwZl0hFGF2b6us-Xr1mIdruqRMy8fzQPXINWgw=w1258-h770-no?authuser=0"
                                        alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            About Our Bookstore
                                        </h2>
                                    </div>
                                    <p>
                                        Are you self-development? Are you raising children? Interested in technology, psychology, cooking, gardening or sports? Whatever your circle of interests, the Flup.kz team will find the key to your heart!
                                    </p>
                                    <a href="/">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="info_section layout_padding2">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6 col-lg-3 info-col">
                                <div className="info_detail">
                                    <h4>
                                        About Us
                                    </h4>
                                    <p>
                                        Vitae aut explicabo fugit facere alias distinctio, exem commodi mollitia minusem
                                        dignissimos atque asperiores incidunt vel voluptate iste
                                    </p>
                                    <div className="info_social">
                                        <a href="/">
                                            <FaInstagram className="fa fa-facebook" aria-hidden="true"/>
                                        </a>
                                        <a href="/">
                                            <FaFacebook className="fa fa-twitter" aria-hidden="true"/>
                                        </a>
                                        <a href="/">
                                            <FaWhatsapp className="fa fa-linkedin" aria-hidden="true"/>
                                        </a>
                                        <a href="/">
                                            <FaTiktok className="fa fa-instagram" aria-hidden="true"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 info-col">
                                <div className="info_contact">
                                    <h4>
                                        Address
                                    </h4>
                                    <div className="contact_link_box">
                                        <a href="/">
                                            <i className="fa fa-map-marker" aria-hidden="true"/>
                                            <span>
                  Location
                </span>
                                        </a>
                                        <a href="/">
                                            <i className="fa fa-phone" aria-hidden="true"/>
                                            <span>
                  Call +707 610 63 95
                </span>
                                        </a>
                                        <a href="/">
                                            <i className="fa fa-envelope" aria-hidden="true"/>
                                            <span>
                  tipamagazin@mail.ru
                </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 info-col">
                                <div className="info_contact">
                                    <h4>
                                        Newsletter
                                    </h4>
                                    <form action="#">
                                        <input type="text" placeholder="Enter email"/>
                                        <button type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePageComponent;