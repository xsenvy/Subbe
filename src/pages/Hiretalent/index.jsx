import React from "react";

import { Img, Text, Button, List, Line, Input } from "components";

const HiretalentPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-opensans items-start justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <header className="bg-white_A700 flex flex-col items-center justify-center md:px-[20px] px-[80px] py-[14px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[10px] items-center justify-between w-[100%]">
            <div className="flex flex-1 flex-row gap-[32px] items-center justify-start max-w-[1084px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[24px] w-[100px]"
                alt="Logo"
              />
              <div className="flex flex-row items-center justify-start w-[auto]">
                <div className="flex items-center justify-center px-[20px] py-[14px] w-[auto]">
                  <Text
                    className="font-semibold text-center text-indigo_600 w-[auto]"
                    variant="body2"
                  >
                    Hire Talent
                  </Text>
                </div>
                <div className="flex items-center justify-center px-[20px] py-[14px] w-[auto]">
                  <Text
                    className="font-semibold text-black_900 text-center w-[auto]"
                    variant="body2"
                  >
                    Get Work
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
              <div className="flex items-center justify-center px-[20px] py-[14px] w-[auto]">
                <Text
                  className="font-semibold text-black_900 text-center w-[auto]"
                  variant="body2"
                >
                  Sign In
                </Text>
              </div>
              <Button className="bg-indigo_600 cursor-pointer font-semibold min-w-[92px] px-[20px] py-[14px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                Sign Up
              </Button>
            </div>
          </div>
        </header>
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start sm:px-[20px] md:px-[40px] px-[80px] py-[40px] w-[100%]">
          <div className="flex flex-1 flex-col gap-[48px] items-start justify-start max-w-[726px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
              <Text
                className="leading-[120.00%] md:max-w-[100%] max-w-[654px] text-black_900 text-left"
                as="h1"
                variant="h1"
              >
                <span className="md:text-[48px] sm:text-[42px] text-indigo_600 text-[56px] font-opensans font-semibold">
                  Hire
                </span>
                <span className="md:text-[48px] sm:text-[42px] text-black_900 text-[56px] font-opensans font-semibold">
                  {" "}
                  the talent you
                </span>
                <span className="md:text-[48px] sm:text-[42px] text-black_900 text-[56px] font-opensans font-semibold">
                  {" "}
                </span>
                <span className="md:text-[48px] sm:text-[42px] text-black_900 text-[56px] font-opensans font-semibold">
                  need today{" "}
                </span>
                <span className="md:text-[48px] sm:text-[42px] text-indigo_600 text-[56px] font-opensans font-semibold">
                  by subscription
                </span>
              </Text>
              <Text
                className="font-normal leading-[150.00%] not-italic text-black_900_a2 text-left"
                as="h4"
                variant="h4"
              >
                Our platform helps you set up long-term partnerships with the
                best industry talent in a few clicks. Grow and scale your
                business <br />
                with a modern and convenient hiring platform.
              </Text>
            </div>
            <Button className="bg-indigo_600 cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[28px] text-[16px] text-center text-white_A700 w-[200px]">
              Find talent
            </Button>
          </div>
          <div className="h-[478px] sm:h-[574px] relative md:w-[100%] w-[47%]">
            <div className="absolute bg-indigo_50 flex flex-col gap-[19px] h-[100%] inset-[0] justify-center m-[auto] sm:pl-[20px] pl-[27px] py-[27px] rounded-[32px] w-[87%]">
              <div className="bg-gradient  h-[126px] md:ml-[0] ml-[348px] mt-[150px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] w-[29%]"></div>
              <div className="bg-white_A700 border-[1px] border-gray_200 border-solid flex sm:flex-col flex-row gap-[16px] h-[129px] md:h-[auto] items-center justify-start md:ml-[0] ml-[79px] mr-[11px] p-[16px] rounded-[16px] shadow-bs sm:w-[100%] w-[398px]">
                <Img
                  src="images/img_rectangle1.png"
                  className="h-[98px] md:h-[auto] object-cover rounded-[10px] w-[98px]"
                  alt="RectangleOne"
                />
                <div className="flex flex-col gap-[8px] h-[77px] md:h-[auto] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="flex-1 font-semibold text-black_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="font-semibold text-black_900 text-right w-[auto]"
                      variant="body1"
                    >
                      $3,500 / m{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Growth marketer
                    </Text>
                    <div className="flex flex-row gap-[2px] items-center justify-start w-[41px]">
                      <Img
                        src="images/img_star1.svg"
                        className="h-[16px] w-[16px]"
                        alt="StarOne"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        variant="body1"
                      >
                        4.8
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="flex-1 not-italic text-black_900 text-left w-[auto]"
                      variant="body4"
                    >
                      United States
                    </Text>
                    <Text
                      className="not-italic text-black_900 text-left w-[auto]"
                      variant="body4"
                    >
                      Available
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white_A700 border-[1px] border-gray_200 border-solid flex flex-row gap-[16px] h-[130px] md:h-[auto] items-center justify-between p-[16px] right-[0] rounded-[16px] shadow-bs1 top-[5%] sm:w-[100%] w-[398px]">
              <Img
                src="images/img_rectangle1_98x98.png"
                className="h-[98px] md:h-[auto] object-cover rounded-[10px] w-[98px]"
                alt="RectangleOne One"
              />
              <div className="flex flex-col gap-[8px] h-[77px] md:h-[auto] items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="flex-1 font-semibold text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cody Fisher
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    $2,600 / m{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Full-stack developer
                  </Text>
                  <div className="flex flex-row gap-[2px] items-center justify-start w-[41px]">
                    <Img
                      src="images/img_star1_16x16.svg"
                      className="h-[16px] w-[16px]"
                      alt="StarOne One"
                    />
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4.4
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="flex-1 not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Poland
                  </Text>
                  <Text
                    className="not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Available
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-white_A700 border-[1px] border-gray_200 border-solid flex flex-row gap-[16px] md:h-[auto] h-[max-content] inset-y-[0] items-center justify-between left-[0] my-[auto] p-[16px] rounded-[16px] shadow-bs2 sm:w-[100%] w-[398px]">
              <Img
                src="images/img_rectangle1_1.png"
                className="h-[98px] md:h-[auto] object-cover rounded-[10px] w-[98px]"
                alt="RectangleOne Two"
              />
              <div className="flex flex-col gap-[8px] h-[77px] md:h-[auto] items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="flex-1 font-semibold text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Floyd Miles
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    $3,000 / m{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Product designer
                  </Text>
                  <div className="flex flex-row gap-[2px] items-center justify-start w-[41px]">
                    <Img
                      src="images/img_star1_1.svg"
                      className="h-[16px] w-[16px]"
                      alt="StarOne Two"
                    />
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4.5
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="flex-1 not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Canada
                  </Text>
                  <Text
                    className="not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Available
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <List
          className="bg-white_A700 sm:flex-col flex-row gap-[16px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-start sm:px-[20px] md:px-[40px] px-[80px] py-[40px] w-[100%]"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-[8px] h-[100%] items-center justify-start w-[100%]">
            <Text
              className="text-black_900 text-center w-[auto]"
              as="h3"
              variant="h3"
            >
              By 30-50%
            </Text>
            <Text
              className="leading-[150.00%] not-italic text-black_900_a2 text-center"
              as="h5"
              variant="h5"
            >
              Reduce operating costs for <br />
              hiring specialists.
            </Text>
          </div>
          <Line className="self-center h-[85px] bg-bluegray_100 w-[1px]" />
          <div className="flex flex-1 flex-col gap-[8px] h-[100%] items-center justify-start w-[100%]">
            <Text
              className="text-black_900 text-center w-[auto]"
              as="h3"
              variant="h3"
            >
              In 3 days
            </Text>
            <Text
              className="leading-[150.00%] not-italic text-black_900_a2 text-center"
              as="h5"
              variant="h5"
            >
              Gain the skills you need to <br />
              solve business problems.
            </Text>
          </div>
          <Line className="self-center h-[85px] bg-bluegray_100 w-[1px]" />
          <div className="flex flex-1 flex-col gap-[8px] items-center justify-start w-[100%]">
            <Text
              className="text-black_900 text-center w-[auto]"
              as="h3"
              variant="h3"
            >
              Transparency
            </Text>
            <Text
              className="leading-[150.00%] md:max-w-[100%] max-w-[270px] not-italic text-black_900_a2 text-center"
              as="h5"
              variant="h5"
            >
              Communicate effectively and share information with a talent.
            </Text>
          </div>
          <Line className="self-center h-[85px] bg-bluegray_100 w-[1px]" />
          <div className="flex flex-1 flex-col gap-[8px] h-[100%] items-center justify-start w-[100%]">
            <Text
              className="text-black_900 text-center w-[auto]"
              as="h3"
              variant="h3"
            >
              Speed
            </Text>
            <Text
              className="leading-[150.00%] not-italic text-black_900_a2 text-center"
              as="h5"
              variant="h5"
            >
              Quickly launch a project or <br />
              release new features.
            </Text>
          </div>
        </List>
        <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[80px] py-[40px] w-[100%]">
          <div className="bg-indigo_50 flex items-start justify-start max-w-[1280px] mx-[auto] p-[48px] md:px-[20px] rounded-[32px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
              <Text
                className="leading-[120.00%] md:max-w-[100%] max-w-[328px] text-black_900 text-left"
                as="h2"
                variant="h2"
              >
                3 easy steps to success
              </Text>
              <List
                className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-col gap-[16px] items-start justify-start p-[16px] rounded-[16px] shadow-bs sm:w-[100%] w-[383px]">
                  <Button className="bg-indigo_50 cursor-pointer font-semibold h-[40px] py-[3px] rounded-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-indigo_600 w-[40px]">
                    1
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Find Talent
                    </Text>
                    <Text
                      className="leading-[150.00%] md:max-w-[100%] max-w-[351px] not-italic text-black_900_a2 text-left"
                      as="h5"
                      variant="h5"
                    >
                      Convenient search that will help you find the right talent
                      by skills, experience, rating, location and price.
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[16px] h-[189px] md:h-[auto] items-start justify-start p-[16px] rounded-[16px] shadow-bs sm:w-[100%] w-[386px]">
                  <Button className="bg-indigo_50 cursor-pointer font-semibold h-[40px] py-[3px] rounded-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-indigo_600 w-[40px]">
                    2
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Subscribe
                    </Text>
                    <Text
                      className="leading-[150.00%] md:max-w-[100%] max-w-[354px] not-italic text-black_900_a2 text-left"
                      as="h5"
                      variant="h5"
                    >
                      Purchase a subscription to talent. You can cancel your
                      subscription at any time and choose another talent.
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[16px] items-start justify-start p-[16px] rounded-[16px] shadow-bs sm:w-[100%] w-[383px]">
                  <Button className="bg-indigo_50 cursor-pointer font-semibold h-[40px] py-[3px] rounded-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-indigo_600 w-[40px]">
                    3
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Get results
                    </Text>
                    <Text
                      className="leading-[150.00%] md:max-w-[100%] max-w-[351px] not-italic text-black_900_a2 text-left"
                      as="h5"
                      variant="h5"
                    >
                      Efficiently solve your business problem to grow and scale
                      your business while competitors use outdated recruitment
                      methods.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex md:flex-col flex-row gap-[109px] md:gap-[40px] items-center justify-start sm:px-[20px] md:px-[40px] px-[80px] py-[40px] w-[100%]">
          <Img
            src="images/img_image.png"
            className="h-[478px] sm:h-[auto] max-h-[478px] object-cover rounded-[32px] w-[auto] sm:w-[auto] md:w-[auto]"
            alt="Image Six"
          />
          <div className="flex flex-1 flex-col gap-[48px] items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
              <Text
                className="leading-[120.00%] text-black_900 text-left"
                as="h2"
                variant="h2"
              >
                <span className="md:text-[44px] sm:text-[38px] text-indigo_600 text-[48px] font-opensans font-semibold">
                  Grow and scale
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-black_900 text-[48px] font-opensans font-semibold">
                  {" "}
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-indigo_600 text-[48px] font-opensans font-semibold">
                  your business
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-black_900 text-[48px] font-opensans font-semibold">
                  {" "}
                  with the <br />
                  best
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-black_900 text-[48px] font-opensans font-semibold">
                  {" "}
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-black_900 text-[48px] font-opensans font-semibold">
                  talent
                </span>
              </Text>
              <Text
                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[602px] not-italic text-black_900_a2 text-left"
                as="h4"
                variant="h4"
              >
                Be the first to know when our platform launches! Leave us your
                email address and we&#39;ll keep you informed with updates and
                notifications. Thank you for your interest in our platform!
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
              <Input
                className="font-medium p-[16px] text-[16px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                wrapClassName="bg-gray_200 rounded-[28px] sm:w-[100%] w-[321px]"
                type="email"
                name="Input"
                placeholder="Your email"
              ></Input>
              <div className="flex items-center justify-start w-[auto]">
                <Button className="bg-indigo_600 cursor-pointer font-medium sm:px-[20px] px-[32px] py-[16px] rounded-[27px] text-[16px] text-center text-white_A700 w-[200px]">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex items-start justify-start max-w-[1440px] sm:px-[20px] md:px-[40px] px-[80px] py-[24px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1280px] mx-[auto] w-[100%]">
            <Text
              className="flex-1 font-normal not-italic text-gray_700 text-left w-[auto]"
              variant="body2"
            >
              Copyright © 2023 Subbe Inc. All rights reserved.
            </Text>
            <div className="flex flex-row gap-[16px] items-start justify-end w-[auto]">
              <Text
                className="font-normal not-italic text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                Privacy Policy
              </Text>
              <Text
                className="font-normal not-italic text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                Terms of Service
              </Text>
              <Text
                className="font-normal not-italic text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                Contact Us
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiretalentPage;
