class AddPictureToMicroposts < ActiveRecord::Migration
  def change    # function defenition
    add_column :microposts, :picture, :string
  end
end
