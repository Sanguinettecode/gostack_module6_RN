import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;
export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: #eee;
`;
export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  margin-top: 5px;
  font-weight: bold;
  text-align: center;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Starred = styled.View`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;
export const OwnerAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #eee;
`;
export const Info = styled.Text`
  margin-left: 10px;
  flex: 1;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;
export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
  padding: 0 20px;
`;
