const wdio = require("webdriverio");

const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    deviceName: "OnePlus 6",
    platformName: "Android",
    platformVersion: "10",
    app: "/Users/swatantramishra/workspace/supr/apks/suprDailySagar.apk",
    appPackage: "com.supr.suprdaily",
    appActivity: "com.supr.suprdaily.MainActivity",
    automationName: "UiAutomator2"
  }
};

async function main() {
  const client = await wdio.remote(opts);

  try {
    console.log("logg");
    await client.setImplicitTimeout(10000);

    const splashImage = await getClassElement(
      client,
      "android.widget.ImageView"
    );

    console.log(splashImage);
    // const widgetBtn = getClassElement("android.widget.Button")
    // const widgetText = getClassElement("android.widget.EditText")
    await client.setImplicitTimeout(4000);

    if (splashImage) splashImage.click();

    await client.setImplicitTimeout(4000);

    const widgetBtn = await getClassElement(client, "android.widget.Button");

    console.log(widgetBtn);
    if (widgetBtn) {
      if (widgetBtn.getText() === "ALLOW") {
        widgetBtn.click();
      }
    }
    const widgetText = await getClassElement(client, "android.widget.EditText");

    if (widgetText) {
      console.log("!!!!!!!!!", widgetText, "!!!!!!!!!");
      await widgetText.setValue("5050505050");
    }
    // givePermission.click();

    // await client.setImplicitTimeout(5000);
    // client.setTimeout({ pageLoad: 10000 });

    // const clickOnOtpOnSms = await client.$("android.widget.Button");
    if (widgetBtn) {
      if (clickOnOtpOnSms.getText() === "OTP on SMS") {
        clickOnOtpOnSms.click();
      }
    }

    // const otpText = await client.$("android.widget.EditText");
    if (widgetText) {
      if (widgetText.getText() === "") {
        await widgetText.setValue("123456");
      }
    }

    if (widgetBtn) {
      if (clickOnOtpOnSms.getText() === "Continue") {
        clickOnOtpOnSms.click();
      }
    }

    // android.widget.ImageView

    //   loginInput.clear();
    //   loginInput.send_keys("5050505050");
    console.log(loginInput);
  } catch (error) {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&", error, "$$$$$$$$$$$$$$$$$$$$$$$");
  }

  //   time.sleep(2);
  //   sendInputbtn = driver.find_elements_by_xpath(
  //     "/html/body/supr-root/ion-app/ion-router-outlet/supr-auth-layout/div/supr-sticky-wrapper/div/div/ion-router-outlet/supr-login-container/supr-auth-login/div/div[5]/supr-button[1]/button"
  //   )[0];
  //   sendInputbtn.click();

  //   const field = await client.$("android.widget.EditText");
  //   await field.setValue("Hello World!");
  //   const value = await field.getText();
  //   assert.equal(value, "Hello World!");

  console.log("*********client**********");
  //   await client.setImplicitTimeout(10000);
  //   await client.deleteSession();
}

function getClassElement(client, str = "") {
  return client.$(str);
}

main();
