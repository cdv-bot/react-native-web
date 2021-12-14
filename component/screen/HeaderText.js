import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn'
export default function HeaderText () {
  return (
    <View>
      <Image
        source={require('../image/headerImgOne.png')}
        style={{ height: 80 }}
      />
      <View style={{ marginTop: 10, paddingLeft: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Dịch vụ tư vấn Bất động sản
        </Text>

        <Text>
          1.Hiểu rằng khách hàng có nhiều khó khăn và thắc mắc trong con đường
          đầu tư, chuyên viên DHomes luôn đồng hàng cung cấp thông tin, giải đáp
          thắc mắc cho bạn.
        </Text>
        <Text style={{marginTop:10}}>2.Dịch vụ này hoàn toàn miễn phí</Text>

        <Text style={{marginTop:10}}>3.Chuyên viên DHomes sẽ:</Text>
        <View style={{ paddingLeft: 10 }}>
          <Text>
            -Hỗ trợ bạn trong mọi bước tìm kiếm, giao dịch, bán lại bất động
            sản.
          </Text>
          <Text>-Hướng dẫn bạn sử dụng các công cụ trên DHome.</Text>
          <Text>-Cung cấp thông tin về thị trường dự án.</Text>
          <Text>-Cung cấp thông tin pháp lý, quy hoạch, định</Text>
        </View>

        <Text style={{marginTop:10}}>4.Chúng tôi luôn thực hiện theo quy tắc:</Text>
        <View style={{ paddingLeft: 10 }}>
          <Text>-Cung cấp thông tin trung lập, minh bạch.</Text>
          <Text>
            -Không bán hàng, không khuyến nghị hay định hướng. Mọi quyết định là
            của khách hàng.
          </Text>
          <Text>-Đặt quyền lợi của khách hàng làm đầu.</Text>
        </View>
        <View style={tw('flex-col items-center')}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#F39203',
                padding: 6,
                borderRadius: 6,
                marginTop: 10
              }
            ]}
          >
            <Text style={[tw('text-lg'), { color: '#F3DBBB' }]}>
              Liên hệ ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
