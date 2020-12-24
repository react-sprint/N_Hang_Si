import React from 'react';

const GithubSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0" transform="scale(0.002)" />
        </pattern>
        <image
          id="image0"
          width="500"
          height="500"
          xlinkHref="data:image/png;base64,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UmVhZHlxyWU8AAADgWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjM3NWYwZmE0LTNhZDYtNmI0NC1iNzc0LTFmZjYxYTU5ZDg4NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERDBFOUIwMjJDQTUxMUVCOUU5NkEzOUMxMkMwMDk1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERDBFOUIwMTJDQTUxMUVCOUU5NkEzOUMxMkMwMDk1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NWMzMGFjZS1jZGIyLWQ0NGUtYjljZS05ZGFlYTEyZWU0NjMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5YTBmYTUyNy05OTlhLWZhNGQtOWU4My04YjYxYzYxYjIzNTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4/5bz3AAAABlBMVEX///////9VfPVsAAAAAnRSTlP/AOW3MEoAAAtPSURBVHja7N1bYuM4DETRqv1vejaQ6e7YJFAgbv1HIXEE6mFbksm6iBKATkAnoBPQCegEdAI6AZ2ATkAnoBPQCegEdAI6AZ2ADjoBnYBOQB86358D+hJord0BBPY+fIG9z15475MX4Pvkhfc+eQG+D16I73MX4Pvchfg+eCG+z12I73MX4vvchfg+d0G+j12I73MX4vvcBfk+dkG+j12I73MX5PvUBfk+d0G+j12Q72MX5PvYBfk+dkG+j12Y71MX5PvYBfk+dkG+j12Q71MX5vvYBfk+dkG+T12Y72MX5PvUhfk+dkG+T12Y72MX5vvUBfk+dmG+T12Q71PXGvPRI5uOPqGgj6vrXfNNQ41Gn1fEF9n1mjnjDkMfXbiH1PUMOTMIRH+lSx6YhuYX66GLzsfQX/vIYvR0NLlG7szgKWlsfdyfqdMStQmb2hvoz4qPZde8qjgt42aoaRVxYoZNUqPK4diMUtegWjg7gz5GGFMH52fKdDWkCJ6RGTPWiAp4TiZMWgOm71EZoC7M981c6TP3xIRPXtnT9tREz1/Jc/bgRH/PM3fGHp5cdWEezj4EHfPwSihzpn4lkcVQ4jT9UBLVhXk+ezo65ANqIswnsCejYz5CPQvdzyZKXZgPYQ9Fx3xIeRQzKT+fGHVhPob9OXQb9bIiCfN96kqYjBclQV2Yj2J/Bd1GfSI65qPKJcz3qQvzferCfJr6dHQb9YaqCfN96uobu5dnI7qNelPthPk+dWFeQ5ukrjDzp3aNv08a9J+3+M7aHbNUKt18Jvy/z6JDXVHmfuEk4JdTWIL+6Rann5E7RV1J5p5+zv/Z8MvVlWTu26etzVfdh0s5B/37Tc690eIQdQWZu+AcpvXemkPUi9GPbXPk7dTich5HbzZPUi85hT1aBeUs7q46j2kiP3E+MxD99EZnkR86oTlQAg02b2dvXei+qEAhesueFER+Za+vQ78zuuvnMvVbK0DXSvSeWuZstAj90tjOfz1UX6f4bnmRehX6VfOfNq9zKVuTqk5mlWJ+7vElupKbK1J1qytlcT/0GB5dzPf/wRmtrpRGP3EA1vXcf6RAhbpSzAvE+tNzKdiCbtAvr3iX0QX6ZfQCdaU0Ouh1C7xSzEGva3XR6HHozkKn0UvQb6uDDnrfWEC/+ll9JbpBryrHJfS7AwEd9OXod1dVpxxnQAd9O/rNct9EN+ilFbmALtDD0RWAXvGNnJfR3Y8u0OPR1Y5u0Mv74DD6dXPQQQf9YtVvoRv08egCvQPdo9ANes8xD/T56G5ELzBfoe4MddBBbzQHveyoDno4uoeg26iPRxfojegGHfQD/0Q5q/sCdWe0unIaHfQqAAU1+vvqzmj1KHQO6inomD93KidO4/ZdteWgS6inoHONPk99CLqEep2CavcxzBNaXQmNLqG+DV1CvXR9V//qLqG+DV1CvXh9b38/nkAvb3U1N7qEenmrN6NLqKehh61Zq9VD0Wn0Ia3eii6hvg1doAeiY56k/gI65m3qbeiIg476SHTMs1r9Q/SYnRZ10Neqn9qyWlZ3rFtbvQUd6orCfYQu0EE/Nnagmw/qYnUfpD4XHebu9R30d1v9A/RbAwcZdHKteLfRMQcd9Oj1HfSFrV6NDjDoZC46q3uk+q/RaXTQQX9ofQd9mPo8dHDfQafRQQcddNDbjpCgL2z1X6Jz8g46J+8vHdRBBx100EF/8vQddNC5YgMddNBBf+NCHXTQQQcd9E3oAh100GeevoMOOuiggw466KAfQkcddAI65qCDDjrooIM+Bh110AnooIMOOuigT0VHHXQCOuhvoqNeeocLdNBBB73ke++gg062oKMOOgEd8+d+n476O+i0Ouiogw762QqCDvoUdNRBJ9fQ/Tt0g55pPhYd9dbVHXTQqw7qqJes7qCD3o2OOuiYr0BHvQDdv0U36K82+iF01EEHHXTUz5UOdNDHoaPeZH4KHfU30Gn1PPMX0FEHHfOz9QpFN+iT0VEvMC9AL2l1g15+SAd9kvkz6Ma8enU/h4466KhfKNipzcvt67sxH4uOelSjx6Mb84XoxrxwdU9BN+Z1jf5ndNSDzF9EN+YL0Q36RHTUZ5j/Bb221Y35QnRjXrLoykHr+wZ156NXt7oxL4BIQ3+c3QmNfhgd9VvlKUVvaHVjfpkhEd2Q311w5bz1/U12g75OvbIc/ha9S92YXzPIRTfkY9APqhvzOwRybqs/wl5eBceh/7IYmF9Ya1X6Pz+pyHbyHnRfRP+nsuwmv3B8VeWe9vkoF5NfOJNOQH90kW86mfUZ9Pvq77H3XcDMQb8yjBfIH0D3t3VaR37l3picov4Ku70U/aZ6tLvdbH4Q/eoNmk9KtoT80icfqt/hDlVtgfilRu9A//50Ls7dt3JnIGr57wfL97D4rUa/hv7xV6tnff7qu5mGXqneQu/7uTUm9Q3gQjHf8R6K3qJ+Wd6luTY8dQ7hYmmHe19qs/voH6sHknewJ6DPafWli/sv+teBrZ76cDLQUxd4vXEid3Nw6h7H6eq+cbE2Gb1+gX/kCv2queXMVk990VuseRB68QL/zN24u+OSX1J/5R6stqJrL/rtUckPqb/ycct89C9+tbQU/fqY5OBWD/32VJ55Hvo3P1CMRNfwRrecra516AI98icQw80tx6sH/rgR9Jtfnfq3P1d1ZptbHqH+/xtQR6LMS9Ddgv7TNtSW0eZl6Ao7KoMeMTbQq8wL0fUSumLMy9BpdU02r0QX6BGL+6foqE9udCtoiKvRK4dRi/6OeoZ5Mfp29cnm5eii1dvNLdPq7egag75cfXCjN6AL9GZzy6g3o2sU+mr1weY96C+od5u3oW9WH2xuGfVG9J5/34U+/sqt17wVfa/6YHPLqHeht/3zzodyjv54fbD59+gX1f00uiajXx39u+it+5sdvs++id57YOlFn/vmxcHmbn/O9qF/Ub5rdNUrBt1lk/jDX89p9f77A25XTxhC5agDbgQmVHwVekJ/+BX1Ieh6CL1/MjPQMz7P9SvqE9AjPs7NQY9+M9ep8YaYO+ALfv33uIqGm2LugK/y9t/kqhmtnkS3OucVjq4cc0f8JuvIzLLRk8wPo3fOLRo9ytwhv7ntvtN1d5zKMnfKr+u7b3XdHGaaeSK63kJXnLlTHp7Sfrfr1iC1At3qmWckuhLNnfMUvO57HzdGmGnuoOdddt/9OD4+hZrfQW+Zbhq6Ys2d9Dzj72Ychh5s7qgnlzdfDR8cmpLNr6Fb1fMOQle2ucNeR/LFzGPQlW7usBcPfTH5FPR8c6e9Yqz5mvjrMWmAuePeJth8VfzdiDTC3HnvDW2+Lv5iPBpi7rw3BH9aiG50jTF34svAP6uFOtW7PrfNRK8rRyO6ZpnfR7eKStKGrmnmBehVVelB1zzyGnSrojQd6BppXoNuFVRHb8TPoLugQpinoft+lTCPQ/f1SmGeh+7b5YI8EP2ZU63x5qXoqGeY16KjHmFejI56AHk5OuwB5vXoqLebN6Cj3kzegg57s3kPOuqt5k3osDeS96Gj3mfeh466+hrOhn0XeS+6MV+Ivpi9t+pGfRl5P/pKdq9HN+QL0ZexG/Rt7BnVNurLyHPQV7Ab9G3sQYW2Yd9Fnob+LHtYkW3Yd5EnohvyhehvsUfW14Z9F3ks+hvusaW1Yd9Fno0+mj26rDbsu8jz0Sey55fUAwL5QvQ57EOq6SmBfCF6OvukQnpWEF+IHsk+roQeGMQXosfAT62d5wbxheid7rOr5vEBfCF6Jfwj1fI7AXwh+kX4x4rkJ4P2QvQD9C/XxQsC9kJ0AjrolAB0AjoBnYBOQCegE9AJ6AR0AjoBnYBOQCegE9AJ6AR00Ano5NH8J8AAtRv6GE64KKIAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default GithubSvg;