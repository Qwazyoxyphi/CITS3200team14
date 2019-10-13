<template>
  <div class="container">
    <div class="eqi-container">
      <IconClient 
        title=""
        message="Royal Perth Hospital" 
      >
        <img 
          style="width:90px;" 
          alt="Royal Perth Hospital"
          src="@/static/logos/RPH-logo.webp"> 
          
      </IconClient>
      
      <!--<IconClient 
        title=""
        message="Fremantle Hospital" 
        iconlink="http://www.clker.com/cliparts/H/y/S/h/H/w/large-red-cross-hi.png"
      />-->
      <IconClient 
        title=""
        message="Perth Childrens Hospital" 
      >
        <img 
          style="width:150px;" 
          alt="Perth Childrens Hospital"
          src="@/static/logos/PCH-logo.webp"> 
      </IconClient>
      
      <IconClient 
        title=""
        message="St. John of God" 
      >
        <img 
          style="width:180px;" 
          alt="Saint John of God"
          src="@/static/logos/JOG-logo.webp"> 
      </IconClient>

      <!--<IconClient 
        title=""
        message="Perth Eye Hospital" 
        iconlink="http://www.pertheyehospital.com.au/PEHNews/40-Perth-Eye-Hospital-joins-Cura-Day-Hospitals-Group.png"
      />-->
      <IconClient 
        title=""
        message="SKG" 
      >
        <img 
          style="width:150px;" 
          alt="SKG"
          src="@/static/logos/SKG-logo.webp"> 
      </IconClient>

      <!--<IconClient 
        title=""
        message="Healthscope" 
        iconlink="http://www.livetradingnews.com/wp-content/uploads/2016/10/hsop.jpg"
      />

      <IconClient 
        title=""
        message="Geraldtion Regional Hospital" 
        iconlink="http://www.clker.com/cliparts/H/y/S/h/H/w/large-red-cross-hi.png"
      />-->
    </div>
    <!--<div class="eqi-container">
      <IconClient 
        title=""
        message="Sisters of Nazareth" 
        iconlink="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8PEA8PFg8QDxUQFxUWFRUQFxAXFhIYFhYXFRUYHSghGBslGxUWITEtJTUrLi4uGCAzODMsNygtLi0BCgoKDg0OGxAQGy0mICItLy0tKy0tLS0tLTAtKzAtMi0tLy0tLS0uNS0tLy0tKy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAP8AxgMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYDBQcBAgj/xABMEAACAgECAgYFCAYFCQkAAAABAgADEQQSBSEGEzFBUWEUInGBkQcjMkJSkqGxYnKCosHCJDNDU/AVJTWTo7Kzw9EWRGNkc4OktNL/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAwECBAUG/8QANhEAAgECAwQIBQQCAwEAAAAAAAECAxESITEEE0FRIjJhcYGRscEFodHh8CMzUvEUQkNiggb/2gAMAwEAAhEDEQA/AO4wBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQCPrtbVQhsusRKx2s7BR7MnvmYxcnZGspKObKnr/lBpGRp6Lbf0m+YQ/eBf92U3aXWfgs39PmabxvqrxeX3+Rpr+nOvb6I0qDw2PafvFwPwmf01wb/ADxFqj4pGD/tjxD++p99PL8GmMVP+Pz+wwz5/L7kvTdPdYv9ZTprB+jvoP4lxM/pvmvn9B+ouT+X1LBw3p1pLSFt30OeXzoAQ+y1SVHvwfKY3TfVd/XyG9S6yt+cy0KwIBByDzz25kip7AEAQBAEAQBAEAQBAEAQBAEAQBAEAQDlnT3TMvESzlmWypbKtxyK8epYqA/R5hWOPty7k90rc8/Ygkt67+HuaORLCAIAgHkXBcvkvRwdVhm9HTq0WvJKq5DM5UfV9U19njLVJNwi3rz7Py5GnG02lp7/AJYv0gXEAQBAEAQBAEAQBAEAQBAEAQBAEAQCm/KXo80UajvpuCE/oXepj7/VfCVp5px/MvtclUyal+ZlFCSZQ92QBsgApAPNkA6L8nem2aBHI532WXHzBbah+4qSlbrW5KxOjpfmyzyRUQBAEAQBAEAQBAEAQBAEAQBAEAQBANZ0l0Rv0eppH0npbb5OBlD94Cb03aaZpUV4tHLKCHRXHYyhh7CMxNYZNGYu6TMmyamRsgDZAMGsJWt2A5qhIHicch8ZvTjimka1Hhi2df4VpBRp6KB2VUpWP2VC/wAJrOWKTfMzBYYpEqamwgCAIAgCAIAgCAIAgCAIAgCAIAgCAIByGvT7DZVjHVX21D2Jayr+6BLVutfnZkqXVtyuZNkkUGyANkAVaffbp6/7zVUqfNRYGb91WlaWTb5Jk6uatzaOtSJUQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQDmXFK8a3XL4agMP26KnP4sZWp1Yvs9yVPWS7fZGHZJlD3bAPNkAlcCp3a/Rj7D2W/dodfzsEpDKMvziTnnKK/NDpMkVEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEA53xxf6frP1qj/sEH8JWXUj4+pOPWl+cCPtkzcbYB5tgE7osn+ca/BdJefebKB/1lV+0+9e5J/uLufsX+RLCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAc74kd2t1zd3Xog/Z01WfxJlZ9WPd7slDrS7/AGR8bZMofIwewj4iZs+Ri6PopMGSd0V/0gPPR2/hdT/1lP8AifevQm/3F3P1LzJFRAEAQBAEAQBAEAQBAEAQBAEAQBAEAQCu9Iul+n0jikB7tW/JaKhvcnGRux9H88dxl6WzyqK+i5shUrxg7avkVbRdFeKaprLL700qW2vaUQC2313LYLdi4BAGD3dkvKrQhosTXPQjGnWlq7GWrofwgsVsv1eqsV+rbDW37GBwVbqF9XHfns74/wAmss0kvBe43FJ5Ntnl3RngAt6g6fVC7Bbbs1xO1W2lhyIK5wM9nMTKr7TbFdW8DG6oXtZ/Myr0DoYO3D+Jais1u1RG4X1o6nDIy8uYPiZo9pelSCfhY3VBawk0QqTr+F6lNTraOu0yVWVG7TjOFdq23WIcYx1Y8Bz7TN1ClVi403Z8maOVSnJSqK6XFHQuFcVo1VQu09qvWe8dx8GB5qfI85xThKDtJHXCcZq8WTZqbiAIAgCAIAgCAIAgCAIAgCAIAgCAU/pNx++y/wDyZw7HpRGbbjzXSIe8/p8/xHeeXVSpRUd5U04Lmc1SpJy3dPXnyImgfh/BrGqZNQ9xRLL9WUNvO1yq72BLAMytyAIyOZJOTtLebQr5W4LuNY7uhk9eLItXCNXrWtfr6rUr1Caii5xYV1Ned6LXZW+KduNrbEycc85mXUhTtlbKzXLh4+ZjBObfy7fobunomRdfcbKQL7RfsNXW9VZsUMUZ22nLLuztBknXvFLllqUVHNvn2G6PCl9MGs3NvGmOm28tu02CwnxzlQJLG8GDtuVwdPF2WK3qOhbiiuhL3Is1nXakl3Rbaza1rBKssobOxeW3kCST2S62npYmuFl5WIvZ+jZPjmbjifFb11Vek0+nrdmoa9mstNKhVcJtXCMWbLeGBy8ZKMIuDlJ9nMpKbUsKRWb+EOpPE+EK1V4Zlv0jDCXFGIdNo5BwQcY5HOQeeT0Kqn+lWzXB8iDptfqU8nxRa+jPH6tfpxdVkEHa6H6VTjtVv8cxOarSlSlhf9nRTqKcbo28mUEAQBAEAQBAEAQCv9J+knob6dBUbDYWZwDhlrUAFlzyLbmXAOM4aUhTUk23YnObTSSubXhvEadTWLabFes947iO0MDzVh3g8xNJRcXZm0ZKSuiXMGwgCAIBoOmvHTotKXrG7UWsKKUxndY/Icu/Hb58h3y2z0t5Oz0Wb7iNapgjlq9Ctavg9/D+F3pUzDUWUvqdTqs5Zn+wjducsefcAx5M2Z0RqRq1lfS9kiDhKnSdtdWyx8O0KajVDiJTktPUUlsMXQMWF3MZUnc4XvKtk4zgc8pOMd34v6FoRUpY/BfUl9JeNpoaOtZS7swqrrXkbXb6Kjw7CfYPdNIxxXbdkldt8EuJSc8KyWeiRRtR0u16vi3W8OpsPMUlGsC57A9hbkcTjjt6qLHQ2epOC/2yV+5cTLpyi7VKkYy5fVlp6M9KOv66rVKlWp06CxwG+bes/wBrWx+r457O+dNOdOtTVWi7xeXanya5mLyjJwqZNeXejHZ8oHDwTte51BwXrptdBj9ILz90q6Ti7SaT5NpM0VaLzSbXOzNijaPiVC2I4srydroz1vWccwGUh62weY5cjzmHjpSs1Yz0KqujRcY1vE9Nfp6xZQa7r0qqVamYuN/ri53sLAioFsjOdp7OWb040pxbs8lnn6eJKcqkZIwdJKv8l61OK1A+i6hhTrEHYMn1bgPHPb5/rmZpPfQ3T1XV+hrUW6nvFo9S9owIBBBBGQRzyPKcZ2H1AEAQBAI+u11VFbW3WIla4yzEKBk4HP2zMYuTsjWUlFXZIEwbCADAOXdItT12v1L91ZXTr7K1y377uPcJWeUIx8SUM5N+BG02+t+tpseq3kCyY9cDudTlXHtHLuxEajSs81yMyppu6yZZNF0xvQYv062D7dLBGP8A7VhwPc3ujDTlo7d/2MYqkdVfuNpX000n1vSUPgaLmx70Vh+MbmXBrzQ30VrfyZ9Hplou57yfAafUH/lxuZ9nmvqN9Ht8mYLulxPKjR3Me5rClCe/mz/uxu4rrS8sxvJPSPsaHhFt3EOM7tR1XV8Nq3hU3bVttA25LfSOATnlzQcp0Sw09n6P+3ojnjinW6X+vqSeG16rWazU6bV6q0JQxNmnCUiu2t7D1IUlSz1mtSGzzyQOXOYnghBSiteOd+37G0VKcnGT04F77B5D3TjOs5X046U0ajUaQ6awsmna/NhRjV1j17KsH6/reHjK1tkc9nnSl/ta6Tzw3TfyOXfpVIyjwvnbK9svmarhnRmm/SvbqHb0h3dnszzqZXIYbew9hz+ErPa5UJqnSSUIpJLhaxmlscKtNyqPpN5vkyDqqlbU6HSZswmnKWgZDMgzatLgd+EXl5iebQq1KezbVtULJSn0Hw4Rcl4vXjY2qQjOrRou+Sz9bMl1cUvO1hZ1YIBREAVFXuCgr6wx388+U9Wj/wDOfDnDDUWOfGTfSvz1yPF2n45t8J4oLDHgsOVje9DdZt4nSawFGsotW5ByUWU4YPjuJB+DTg2ahVoQq7NVbapyWBvjGS0PZjXp13CvTyxrNdqOgcY4cb0ASzq7lOUtCK7VZ9Vym7sJQsvvlISwvPNcis44kUroktOpr1nDi9z1302WM1m9yx656lvFjcjvQVMMdjI07K+KLVTJW/u3gctK0k4Hz0L6T6mvTej26YWHRu2lYpYBYDWcAbHAUgDAzu7uyY2mlDHiTtfMzs9SeGzV7ZdpZU6YUY+cp1ae2o2/8IvOfdN6Nef1L722qf53H2OmOh/vLR7dPqB+dcbmfZ5ob6Pb5M+H6aaP6vpDHy094/FkAjcy4280N9HhfyZrtZ00tYYo0pX9K9lGPMV1li3vKxggus/IYpvReZWOIWW6ht+psNrDOARtrryMHZWOQ5csnJ59szvbZQyCp8ZZl46C6826NUc5s07HTsTzJ2gFCfEmtkJ88zFVdLEuOf54ik8sL4ZFikip5AOP0NuNj/3l1tv37Wb+MrWfS8vQlSXR8/UlIJMoZ0EAyrAM1YgEqpYBD6E7fQ+Mal7zT1mstBuGM1KijaRnw3kCdtfrU4pXyWRyUOrOTfHUsPQqvVsj36ttxfC0s9aU3dSCSOtCchknIHaO/mSJGu4J2h455X7CtFSteXh3FV+UrpFql1NmkovKUppQ1oVVLOX3ZXcRkepjs8ZtTcKcYyau5Oy/O81qKc5SSdkld/ncVbht607OVnzf0LF9cYPinZnnjs5zknWlNt3Sb6yeWfY+XidEKSgkkm1waz1/ORH1OotNjtvKLbf1uFArJPqKW3A7hzwcZxkA4l3XhKngSvZWb1XF25aIi6MlO8na7vbTkr+bJnBb6zodXTYwS/TBeJ0XAevY30Sjk/SyWC8/tHwnVKMK6w4ei7wlHgu71Ryq9K+ea6SZl4Zx0it6tVWhrcs5TvrDtuyoJ9ZBknlzXHwpL4Y4Ri6Uniiks+NvcjR+LRlJwqxvF6NZ58V9DCNY2j1K6rSWNnYVHWqrblPMowzubsGCvP8AM9ipTq08NdZ9jOFbTRo1b7M7rlZq3t6HW+iHHvT9Imo2bGJZGXOQGU4OD4HkffPEr0t1PCfQUau8hiK/w7Ua1NZUpuqTRV32ULp66gua1ufTpucnII+bbly9aWkqbg8nfnfsuRi5qeuXL5Guqr6vi/Fqh9FmpvHtavLH4t+EzVzoQfejNLKtNdzJ1gnIdJGcQDE0AwuIBgcQDddAdRt1l9WeV2nW0Dzqfax94tT7so86fc/X+iayqd69P7L/ACRUQDjuiXCgHtUsp9oYg/lK1euyVLqImJJlDOsAyrAJFQgEuoQCH0C4ZTq+Ha3SXgmscRsDAEqcqa3HMc+0D4Tt2icoVIyj/FHJQgpwlF82XLgvBadHW1dPWbWfed7tac4A5FicDCiclSo5u7OmEFBWRw7pTrmbVa676za56we7bVlFz4jaMTshSjUqxpvRQv5s5J1XTpSmtXK3kiDoGdVDEnHMrXnAx3sxPYv+OcjtkaU54UlfJOVs78kuLKbLKpGOJvuj7vkj6rO5t5OSWqA8wbN3Z9UYXkPDn3zSaUI7uKySm34Rtrx1z7TaLcpbx6txS8ZX04aZcbH2aA40xwCwcgA8gQMnmf2Z0/D5SW11ILTJ/JHL8TUVscZt5q69TPrNa/VM+1FTO0ZO8sc49UYx49vh2T3KlTDHEz5vZ9lUqypxbb7MuF8zNpqwrELjJJKk8+zmVz3DBB+M3SsyVSWOKcvH6nQvknY9Vrk+qur3AeBatS38J4XxNLeruPp/hMm9nRbTwiktuK+t1nWZyeTdYtnj2blU+6cGNno4EUa47uN8Sx9SmhD7TWrTpqZbPDvZCH78u5E6wTlOkiWCAYWgGF4BhcQCb0UbHEdP+lXcnuKq38glI9SXgTl114nSpIqeGAcp1lHVanV1fY1Vje609cuPdZj3StXO0ua+xKnldcn9z6STKGdIB8W66ms4stqU+DOqn4EzeNOctEzSVSEdWfacX0w7dRSPa6j8zNtzU/izG+p80bbS2q43IysPFSGHxEm4tam6knoYeglvU8R4lpDyFpTWV+YblYfiyj3GdNfp0YT5ZM5qPRqzj4l8dsAnGcDOPGch1s/OxtDVdc4Bd7HfB7A72E8/ZLVMctrdNOysrta2S0IQwrZlN5u7tfS7evge6ao2Bs86y3Nj23EfkgPcJPaKiouNspW04RT9W+ZSjTdZO/Vvr/L6JcjGyqp63J2LauTjkTgksPEcwBKxlOpDcpdJxfgr5L3ZKUYwlvb5KS87Zv2RnpZ0Wp2ovFKFiXNbbcEHBz4c50bFUoQ2qTdSOJ2VlJXOH4jCrW2VQhB5O92stTWcS1IaulFOQinPtzgfh+c6/iU7QiuF/wCuKN/gFC9erJ6tZZ8LZ2yZt3B2sAcN81ah8CQE+HL8Z6bPmI2uuXST9ToPySXN/nCtlxtvrfIOQS1eMDv+oD+1PF+Jrppn0nwhrcWWh0EmeYescw6MW9fZxDXfV1OrbYfGuvIQ/A4907NqWFQp8l6nJs2blN8WTdRxLTqcNqKAfA2ID+c51Tm9E/Iu6kFq0Yxej/QdG/VYN+Uw4yWqNlJPRnw01MmF4BgeATuiK7uI0j7NF1nw6tP+ZKR/bk+1e5OX7iXedJkiogFC6daPq9VVqAPU1CdS3lZXlk+8pcfsCWXShbl6Mi+jO/M1fC9HfqjjTVgoDg2uStS4PMAjnYR4Ly5YJEYFHOeXZx+xnG5ZQ8+BadD0LpAB1NllzfZyaqh7K0PMfrlpje26it6/ncN3frO/ob7RcNopG2mimseCIqfkJo5ylqzdQitESSM9s1M2NXrOjmjtJZtPWLD/AGifM2f6xMN+MpGrNcTR0oPOxTelHCL+HXafitVr216Vtliso6zqXOGBdcBwNxxkZBOSTidVCcakXSatfTlc5q0JQkqid7eh0HS6lLa0trYNXYodWHYwIyDOKSadmdiaaujh3SfTJ6br6UGEbV8sdikqHc/HMtVqulOFXio+edkRp01UhOnwcvLK7Na63Npi1dOKNpHWA52qH2Enl2+Pk2ZSGyQjWVSpK8tbW42v/RpLaZujgpxtHS9+F7EnRFPSdMCu6uvrWC9u9qq2Kj4qJ51ZTWzVmnaUsKvyUnn6nQ5RdWnHWKv4uKyLI1Ir0aaw2WtqTRWwPWttsd8EKEJ24JbGMYx4RLZaDcqCglBX4K6stb69upveSpqs5NysuOTvwtoaXpFTV6LrKqawPR9crsR9UWJjl7GJXHkPCdPw11a1Cm6ru5wtnxs/pmSqyp0ZycF1Jpu3b+WItieqB4UKM+9cflPqrZeB8RGXSb/7M6B8lFX+kbPtahK/uV5/nni/FH+okfSfBlbZ0za/KFxZqtMNLRz1eub0epR2gNyd/IAHGe4sD3Tl2WmpSxS0jmzv2ibUcK1eRm4P0J0dFNdb19cUUD50mxc9pK1n1F5knkM+ZmtTaJybay7jMNnhFJPM31eiqUYWqsDwCqB8AJFylzK4VyIur4HpLv63S6dj4mtCR7DjImyqTWjZh04PVGo1nQyrmdPddU3gSb6/ethyB+qVm29v1lf5Gu7t1Xb5ld4lw3VabJuq3Vj+1pzYo83T6afvAeMzgjLqPwZjHKPWXiiALAwDKQVIyCDkH2ESbTTsyqaauiwfJ9p91+qv7kVNOP1j85Z+Bqm8sqaXPP2+pOOc2+WXv9C8yRUQCJxPh1OprNN9YeslWKnPMqwYdnmJtGTi7o1lFSVmSKq1VQqqAqgAAAAKB2AAdgmrz1MpWPuDIgCAIBjvpV1ZHUMjqVZSMhgRggjwxMp2d0YaurMoXDNW3BNR6FqCf8mXuTp7zzGnZjk1WHuHac+/sLbeycVtEccestVz7UccZOhLBLqvR8iidINSDqeIsjZ362xFI55JO3kfjJVaV69PFoo3fhcrTqWpVMOrlZeNjDon9HdgwdtLeWrsrXP0Sv0lA71/ITNLaVtEUnZSik0+2+j7xOhuJPjGTaa7LaruLN0P6McP1QawavUutF6hFBFJBYKQTlQ2d7HmMdkpXlNXU4JOSs+N1oSpwhK2GbaTy4EXitF1CaSq5SNQ/wDSdwuNgTn6zbCAFZixAGMD1sdk5qsKUackrYbYUra9l+xe1zopYpyine66Td/zU1/HNQlWhrqpqUWamsm5uW4illUu3ed1nW4J856Gyw3slU4R08focO01NzF0+Mnby+pGOR6vglC/FyD+E9o+WTTz7ZP5Fw6Ecap0Om4lqL3xUNSoUfWsfqRlUHeez2dpwBPH2+lKpWUY8vc+j+F1FT2VSkbzohwm++9uLa5dt9i7aKj/AN1qOcdvYxBPnzPZuIHHXnGMd1DRavmzvowlKW8nrwXIuc5TqEAQBAEArXG+iFVxa2gim8nJKjNdp/8AEr7Cf0hhvM9kqqmVpZr5+BJ087xyfyNh0Z4UdLpq6WINnN7GGcNY53NjPPAJwM9wE1qSxSutOBmnFxWeptZoUEAQBAEAQBAEAQDQdO1U8M1u6tXxp3YAjOCByb2r9L3S2zfux7yO0K9OXccQGwUV9WQdti+XrZ7x75n9R7XPe5Xi/Ix+n/jR3edmvMn2v6wH2VY/AD/9CebSg8F+bj6/Y76kun3X9CNwzVWaa6p6LOrfqEZjgFc5AUsp5HBPf2ds9lVXOE8SusbS521seTulGcUnbopvv0ubDU6my6xrLbC9tuMueW7u9UD6KgZwB4E+Z4ZzxZ2slw5fd8T0acMOSzvx5/1wNZxBPnbB9upc+eLgPynr/CZXotcn9DxPjMcNaMvzRk6w5bb/AOYUfdrDj8p6/HxPmVlG/wD1fzdi2/Jr0ZovNuuuy7V6uxa0PNEIC5sx3t2Dy2jvAx43xCvJSwR8T6j4ZQi6UZs6hPKPWEAQBAEAQBAEAQBAEAQBAEAQBAEAwa60JVa7EBUrZiT2ABSSTMxV2kaydkz85rUVp02wfOk59vaefj2zs3ilXrbx9BLy0WRyum40qTprpN/VkywYDrnJSjGfEuTk/FZ58WpOMllefyijtksOKPFR+bMbOy6naoXLKoGcgAKN2OXsnXRUZbHjk2rNvLtOecpR2vBFLNJeRsNOMktnOMjPZubsJHkOwe/2ziqvClHT6fV6vwO+ksUnLX6/RaLxIWtX+k0Dzyfe/LPlnE9j4PnFvtS+R4Xx3JW42ZLrB3pnt621/gNo/BhPb4ny8msDtyS9zqHyXVbeGUue26y20++1gPwUT5zbpXrs+y2KOGjFFtnIdYgCAIAgCAIAgCAIAgCAIAgCAIAgGp6VcNbVaO/TrcKusUA2Eb9qhgX5ZGcqCO3vlKM1Cak1exOrHFBxvY4Vw8PYyO2NiBgrAbd2cLzXu5Axtzo0Yzpw60mrrlxMbGqtWUak9Ip2fyM1Pr9Y3c1oA/VQgfwac9W1Jwg+EW/Fr+i9P9TFJcZJeC/GYGQWWoMkbrbGyDg4QBMA+e2ddKTpUZPlGKt2t3OaUFVrJc5N37lY3AGNiKpJYhERRkse5VUdpnnwhOrJ/N/U9Kc4UoZ5LgiBqaHS3V9dt31t6OVByFOQfpd5BI98+q2GlCnR6PE+O+KV51doUXw9jx6nXdsc70U2KCNxYN9IE558x+U7LM81ThK2JZPJ+B2H5Pq1XhejVLVsHV53DsBZixXyKk7fdPmdpbdWTasfY7MrUlZ3LHIFxAEAQBAEAQBAEAQBAEAQBAEAQBAPi6sOrIwyrKVI8QRgiNDDOFcf0LcP1N2k22lc50+VLG1WGQAQPWIJx7persn+TKNWPHrdnaQp7TuIypv/AMkPh5cqKaKrLLUGGG0rtbv3lsbeee2TrbFUq1pVKjUYt875FKW1wp01CmnJrwzJfR7hDW6yrT6h/RiKXYM+35wlgMKCQCSST2/VM7alKCpza6Sk1pwsctOrPeQXVaT143Os8D4Bo9EC4KtaPVa6wqX549UHkEHZyXHdnPbOJybWFKy5I67K+Ju75nJ+LsF13EqWR7N+rtfCKbPVdsjs8iJ9Bs1SKoxxcj5nbtmqz2jFT4EVNYipXYXGFBrYH6WM45jtyCAfjOtSVkzzpUZucoW7V3l3+SnQ39bfq0ymhtUqEOfnrAR86q9wABGe/PlPF+JVKbailmfSfC6VWFPps6XPLPWEAQBAEAQBAEAQBAEAQBAEAQBAEAQDwqO3/AgHOdDZ/Xees1R/+VbLVusu5ehGj1fF+o1+go1AxdUj8sAkcxnwbtHumKdWdPquxtOnCfWRr16K6AEH0ZeQx9J8e3G7tlf8ytzJf4tLkbHh+jp06FKawik7iBk5PiSeZkalSVR3k7loU4wVoo23Qzgmlsp9KfTUtedTqfnGRWblqbFHM+QAla1WaeG+Vl6EqNOLWJrO79S3qoHIdgnMdB7AEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAOXcOszWGHY7PZ9+xn/AJpat12SpdRErfJFD3fAPN8As/QQ/wBBT/19T/8AbtlK/W8F6IlQ6vi/VlgkiwgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBG4lqOqoutPZXU7/dUn+EzFXkkaydk2cz4cmymlPsVIvwUCb1Hebfaa01aCXYSd00NxugDdALT0CP9DK/Z1WoH3rmf+aUrO8k+xehOkrJrtfqWOSKiAIAgCAIAgCAIAgCAIAgCAIAgCAIAgGi6cW7eH6kf3qrR/rnWr+eVo9dPln5Zkq3Ua55eZSd0mUPd0AboB5ugFn+T6z1NYn2dUGHseiv+YNKVOrF9nuTp9aS7fYtkkVEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAKj8ol+K9LUP7TUbz+rXWzf75rlaeSk+z1+xKpm4rtKmHkyg3wD3fAPN8A33QK/Gr1KZ/rNPW4HnW7Kx/wBoko86a7H7E1lUfavcvkkVEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAOc9PNTv1yJ3Uab9618sPhUnxltKfe/T+yWtTuXqaIPJFD3fAPd8A83wDYdGNT1fENK3dZ1lB8g6bh+/Wg98rDOEl4k55Si/A6lIlRAEAQBAEAQBAEAQBAEAQBAEAQBAEA8gHG+J6zrtVqr+6zUNjzVMVIR5FUB98tVytHkvuRpZ3lzf2MG+SKnu+Ae74B5vgHxZqCmLVzuqdbgPE1sHA9+3HvlKT6aT45eZOqrxduGfkdqotV0V1OVdQwPiCMiTas7MondXRkmDIgCAIAgCAIAgCAIAgCAIAgCAIAgGq6UcR9G0WpvBwyVNt8A59VM+W4iUpRxTSJ1ZYYNnIaECoqr9EKAO/IAxMTbcm3xMwSUUkZJqbCAIAgCAdJ+TvW9bw+te3qGbT57iqH1MHv9QqD5gjulK66V+eZKi+jblkWaSLCAIAgCAIAgCAIAgCAIAgCAIAgCAeEZgFf4l0M0NxLCo1WHnupPVZJ7yo9Rj7QZVVpcc+/Mk6UeGXcV7V/J9cv9Tqq2HcLUKH3uhx+7GKm9Vbu/PcWqLjfvNZb0Q4iv9hU36lyn/fCxhpvSXmv7GKfGPz/owr0Y4jnHoTjzNtGP+JM4IfyXkzGOX8X8iXp+hOvc+sNPWPFrGsYfsquD8Zi1NcWzN6j4I33DegFCkNqbHvP2MdVV70BJb2MSPKN6o9RW+bG7cuu7+hb6alRQqKFVRgAAKFA7AAOwSTzKJWPuDIgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIB//Z"
      />
      
      <IconClient 
        title=""
        message="Southern Cross Care" 
        iconlink="data:image/png;base64,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"
      />
      
      <IconClient 
        title=""
        message="The Richardson" 
        iconlink="https://www.therichardson.com.au/wp-content/uploads/2018/03/the-richardson-logo.svg"
      />

      <IconClient 
        title=""
        message="Estia Health" 
        iconlink="https://dps.imgix.net/media/6a005e79-e9a5-4215-b3c5-787d13a571f4?bg=fff&fit=fillmax&h=200&w=300"
      />-->
      
    <!--<IconClient 
        title=""
        message="Tasmanian Health" 
        iconlink="https://media.glassdoor.com/sqll/579366/dhhs-tasmania-squarelogo-1432039089454.png"
      />
    </div>-->
    <!--<div class="eqi-container">-->
    <!--<IconClient 
        title=""
        message="Italian Aged Care" 
        iconlink="https://dps.imgix.net/media/614de279-6f6f-479a-8aaa-8c0c946fbb98?bg=fff&fit=fillmax&h=200&w=300"
      />-->

    <!--<IconClient 
        title=""
        message="Marie Stopes International" 
        iconlink="https://pbs.twimg.com/profile_images/875736561144524800/F2_InShh_400x400.jpg"
      />-->

    <!--<IconClient 
        title=""
        message="Ramsay Health Care" 
        iconlink="https://media.glassdoor.com/sqll/41958/ramsay-health-care-squarelogo-1516268511843.png"
      />-->
      
    <!--<IconClient 
        title=""
        message="Kalgoorlie Hospital" 
        iconlink="http://www.clker.com/cliparts/H/y/S/h/H/w/large-red-cross-hi.png"
      />-->
    <!--</div>

    <div class="eqi-container">-->

    <!--<IconClient 
        title=""
        message="" 
        iconlink=""
      />
      <IconClient 
        title=""
        message="" 
        iconlink=""
      />
      <IconClient 
        title=""
        message="" 
        iconlink=""
      />-->
  <!--</div>-->
  </div>
</template>

<script>
import IconClient from '@/components/Sections/About/AboutIconRack/IconClient'

export default {
    name: "IconRack",
    components: {
      IconClient
    }
}
</script>

<style scoped>

.container {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.eqi-container {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
}

@media only screen and (max-width: 550px) {
  .eqi-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
}

</style>
