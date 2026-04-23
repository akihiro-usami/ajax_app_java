package in.tech_camp.ajax_app_java.repository;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import in.tech_camp.ajax_app_java.entity.PostEntity;

@Mapper
public interface PostRepository {
  @Select("SELECT * FROM posts ORDER BY created_at DESC")
  List<PostEntity> findAll();

  @Select("SELECT * FROM posts WHERE id = #{id}")
  PostEntity findById(Integer id);

  @Insert("INSERT INTO posts (content) VALUES (#{content})")
  @Options(useGeneratedKeys=true, keyProperty="id")
  void insert(PostEntity post);
}
