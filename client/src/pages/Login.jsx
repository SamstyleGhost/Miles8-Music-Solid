import { createEffect } from "solid-js";
import logo from './../assets/logo/logo.png';
import logo_full from './../assets/logo/logo_full.jpeg';
import { useLocation } from "@solidjs/router";

const Login = () => {

  createEffect(() => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('hidden');

    const audio_player = document.getElementById('audio_player');
    audio_player.classList.add('hidden');
  })

  // const location = useLocation();
  // console.log(location);

  // const url = window.location.href
  // const replacedURL = url.replace('#', '&')
  // const finalURL = new URLSearchParams(replacedURL)
  // var accessToken = finalURL.get('access_token')
  // var idToken = finalURL.get("id_token")

  // console.log(accessToken)
  // console.log(idToken)


  // id_token=eyJraWQiOiIrTWR2VGNubHlJRTd6T0FQOWsxTnpGNEJlSFpWaDhuTzNmYjlXWGFMQzdBPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoickVHU0FzdU5uZTAzOVJZbGs2TDF0USIsInN1YiI6ImMxYTM4ZDdhLTMwNTEtNzAxOC1mMTkyLTEzZTM1NGYzM2QxMCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZZVHRnYWRzRiIsImNvZ25pdG86dXNlcm5hbWUiOiJzYW1zdHlsZWdob3N0IiwiYXVkIjoiM20ybGhhajZuYjJ1aHUzZWNhN2o2Y2c3MXEiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTcxNDU1OTIyMiwiZXhwIjoxNzE0NTYyODIyLCJpYXQiOjE3MTQ1NTkyMjIsImp0aSI6IjZiZWNlMDllLTRmZGItNGZkYi05ZDc1LWYzMzk4ZDliNzljNCIsImVtYWlsIjoicm9oYW5jcnJtQGdtYWlsLmNvbSJ9.v6xCrYLr5tMDRx2bihGbR9Eb5cWSTt6kuHXXQ4Mo0nN-YRjvCRME0a8RqcnF-mvFmsHkOkYOr2v0_iCHA65Tle91BMCjE0DT3Rx_l3E8AHN8SSr4FfJ3lSBsUXHHlLnRl-OucBJ0I3ykzn1Qi0J43nH_EeZmmK_VgqwBz5dYxInc_x7OtskaxrRflTkpffIL28JrvxD0pOVrQwEs2JRsREtFKVGr0XxOQ0RUVzO1a4r42qmkL4E1mIqNfMu3SiqvsNg42E0E__N_U2thfVyUSI8bfegHRMH4MOlup3k1ltt8O2jgm35m_nQWMKMfKrZOhPiw_qvKvtcHCvoCDDd9ww
  // access_token=eyJraWQiOiJSendUM05odDlaRW9QbHE3akNpYWJlRXRvWjc0alpSS1RCbUUzU0JVajdRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjMWEzOGQ3YS0zMDUxLTcwMTgtZjE5Mi0xM2UzNTRmMzNkMTAiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzE0NTU5MjIyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZZVHRnYWRzRiIsImV4cCI6MTcxNDU2MjgyMiwiaWF0IjoxNzE0NTU5MjIyLCJ2ZXJzaW9uIjoyLCJqdGkiOiJjZTBhZDUwOC1kYTU3LTQyOTYtYjZlOC1jMWYzNzA5ZGJmMGMiLCJjbGllbnRfaWQiOiIzbTJsaGFqNm5iMnVodTNlY2E3ajZjZzcxcSIsInVzZXJuYW1lIjoic2Ftc3R5bGVnaG9zdCJ9.nDc91ccDRgmYdmO38cZmzzOEEaTfAfOv5ynKIXeZt__lyPCX0R7hrf1ztGNTHu77mtocQrJ0NVBjd84HHq_VYCf4JuvBM1VlJpX4y-wek3uaLyy8dkYAuF8ccTy3PVVG3Ib0c5Fk8H5n7A8Mn_W-HGErtvvGMQvMEvTEBG7NW0Tbwq36fd0Q-oCpWT54HXn-udK2NLZhlbPjL-2aFwnoaZrju8aQzZkBT12-gR0yPi6VKsmTwuQ0h2N-k8NUNDxQCJzEVCd2E3RS7exf5ApVr1HEENaO5e5eqciMj8ZCZX1qYaoxSdOdZFoqQE2B8kwNn-DfHND3tsTtXXr0U1v05Q

  // var UserName, UserEmail;
  
  // // Change - Your region
  // aws_region = 'ap-south-1';
  // AWS.config.region = aws_region; 
  
  // AWS.config.apiVersions = {
  //     cognitoidentityserviceprovider: '2016-04-18'
  // }; 
  
  // var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider(); 
  
  // var params = {
  //     AccessToken:  accessToken
  // };


  return (
    <main class="h-full w-full flex p-0">
      <div class="flex w-full h-full">
        <div class="w-1/2 h-full rounded-md">
          <img src={logo_full} class="w-full h-full" />
        </div>
        <div class="flex flex-col items-center justify-center gap-4 w-1/2">
          <h2 class="text-3xl">Welcome To Miles Music</h2>
          <a href="https://miles-music.auth.ap-south-1.amazoncognito.com/login?client_id=3m2lhaj6nb2uhu3eca7j6cg71q&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome">Login / Signup</a>
        </div>
      </div>
    </main>
  )
};

export default Login;