import React from "react";
import { useParams } from "react-router-dom";
import { contents } from "../../utils/ProgressDetail";
import human from "../../assets/ProgressImage/human.png";
import {
  Root,
  TopBox,
  Typo,
  GridContainer,
  GridItem,
  BigImage,
  ImageContainer,
  BackContainer,
  TextGroup,
  Line,
  TextBox,
  Blank,
  More,
  VoteContainer,
  TextContainer,
  VoteCoinButton,
  VoteAcoountButton,
  ButtonContainer,
  CommentContainer,
  Line2
} from "./styled";

import {
  Button,
  Input,
  Comment,
  Form,
  Header,
  Divider,
  Icon,
  Image,
  Item
} from "semantic-ui-react";

export const ProgressDetail = () => {
  const { id } = useParams();
  const index = parseInt(id);
  const selectedContent = contents[index];
  return (
    <Root>
      <BackContainer>
        <TopBox>
          <Typo size="37px" left="100px">
            {selectedContent.title}
          </Typo>
          <Typo size="15px" left="100px" top="20px">
            후원 기간 : 2023-07-23 ~ 2023-08-23 •{" "}
            <img src="/tag.svg" alt="테그" />
            {selectedContent.organization}
          </Typo>
        </TopBox>
        <GridContainer>
          <GridItem>
            <ImageContainer>
              <BigImage src={selectedContent.image} />
            </ImageContainer>
            <TextContainer>
              <Line />
              <Typo size="16px" fontWeight="400" color="#333" top="0px">
                {selectedContent.text}
              </Typo>
              <Blank />
              <More />
            </TextContainer>
            <ButtonContainer>
              <VoteCoinButton top="32px" background="#FF7425">
                <Typo size="15px" fontWight="700" color="#000">
                  코인으로 후원하기
                </Typo>
              </VoteCoinButton>
              <VoteAcoountButton top="32px" background="#fff">
                <Typo size="15px" fontWight="700" color="#000">
                  계좌로 후원하기
                </Typo>
              </VoteAcoountButton>
            </ButtonContainer>
            <Line />
            <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>김동국</Item.Header>
        <Item.Meta> {selectedContent.organization} 대표
        </Item.Meta>
        <Item.Description>
          <Image src='/images/wireframe/short-paragraph.png' />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
            <Line/>
            <Blank/>
       <CommentContainer>
        <Comment.Group>
        <Typo size="25px" left="0px">
            응원댓글
          </Typo>
          <Blank />
          <Typo size="10px" left="0px" color="gray" >
            당신의 따스한 한 마디로 세상을 빛낼 수 있습니다.
          </Typo>
          <Comment>
            <Comment.Avatar as="a" src={human} />
            <Comment.Content>
              <Comment.Author>Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>1 day ago</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>
                  The hours, minutes and seconds stand as visible reminders that
                  your effort put them all there.
                </p>
                <p>
                  Preserve until your next run, when the watch lets you see how
                  Impermanent your efforts are.
                </p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar as="a" src={human} />
            <Comment.Content>
              <Comment.Author>Christian Rocha</Comment.Author>
              <Comment.Metadata>
                <div>2 days ago</div>
              </Comment.Metadata>
              <Comment.Text>I re-tweeted this.</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar as="a" src={human} />
            <Comment.Content>
              <Comment.Author>Christian Rocha</Comment.Author>
              <Comment.Metadata>
                <div>2 days ago</div>
              </Comment.Metadata>
              <Comment.Text>I re-tweeted this.</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Comment"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
        <Line/>
      <Blank/>
      <Typo size="15px" left="0px" top="0px">
          후원 기간 : 2023-07-23 ~ 2023-08-23 •{" "}
          <img src="/tag.svg" alt="테그" />
          {selectedContent.organization}
        </Typo>
        <Line/>
      </CommentContainer>

          </GridItem>

          <GridItem>
            <VoteContainer></VoteContainer>
          </GridItem>
        </GridContainer>
      </BackContainer>
      <TextContainer></TextContainer>

      

    </Root>
  );
};
